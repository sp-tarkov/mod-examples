import { DependencyContainer } from "tsyringe";

// SPT types
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ITraderAssort, ITraderBase } from "@spt-aki/models/eft/common/tables/ITrader";
import { ITraderConfig, UpdateTime } from "@spt-aki/models/spt/config/ITraderConfig";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { Item } from "@spt-aki/models/eft/common/tables/IItem";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { Money } from "@spt-aki/models/enums/Money";

// New trader settings
import * as baseJson from "../db/base.json";

class SampleTrader implements IPreAkiLoadMod, IPostDBLoadMod {
    mod: string
    logger: ILogger

    constructor() {
        this.mod = "13AddTrader"; // Set name of mod so we can log it to console later
    }

    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    public preAkiLoad(container: DependencyContainer): void {
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);

        const preAkiModLoader: PreAkiModLoader = container.resolve<PreAkiModLoader>("PreAkiModLoader");
        const imageRouter: ImageRouter = container.resolve<ImageRouter>("ImageRouter");
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig: ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        
        this.registerProfileImage(preAkiModLoader, imageRouter);
        
        this.setupTraderUpdateTime(traderConfig);
        
        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    public postDBLoad(container: DependencyContainer): void {
        this.logger.debug(`[${this.mod}] postDb Loading... `);

        // Resolve SPT classes we'll use
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig: ITraderConfig = configServer.getConfig(ConfigTypes.TRADER);
        const jsonUtil: JsonUtil = container.resolve<JsonUtil>("JsonUtil");

        // Get a reference to the database tables
        const tables = databaseServer.getTables();

        // Add new trader to the trader dictionary in DatabaseServer
        this.addTraderToDb(baseJson, tables, jsonUtil);

        this.addTraderToLocales(tables, baseJson.name, "Cat", baseJson.nickname, baseJson.location, "This is the cat shop");

        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }

    /**
     * Add profile picture to our trader
     * @param preAkiModLoader mod loader class - used to get the mods file path
     * @param imageRouter image router class - used to register the trader image path so we see their image on trader page
     */
    private registerProfileImage(preAkiModLoader: PreAkiModLoader, imageRouter: ImageRouter): void
    {
        // Reference the mod "res" folder
        const imageFilepath = `./${preAkiModLoader.getModPath(this.mod)}res`;

        // Register a route to point to the profile picture
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/cat.jpg`);
    }

    /**
     * Add record to trader config to set the refresh time of trader in seconds (default is 60 minutes)
     * @param traderConfig trader config to add our trader to
     */
    private setupTraderUpdateTime(traderConfig: ITraderConfig): void
    {
        // Add refresh time in seconds to config
        const traderRefreshRecord: UpdateTime = { traderId: baseJson._id, seconds: 3600 }
        traderConfig.updateTime.push(traderRefreshRecord);
    }

    /**
     * Add our new trader to the database
     * @param traderDetailsToAdd trader details
     * @param tables database
     * @param jsonUtil json utility class
     */
    
// rome-ignore lint/suspicious/noExplicitAny: traderDetailsToAdd comes from base.json, so no type
private  addTraderToDb(traderDetailsToAdd: any, tables: IDatabaseTables, jsonUtil: JsonUtil): void
    {
        // Add trader to trader table, key is the traders id
        tables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(tables, jsonUtil), // assorts are the 'offers' trader sells, can be a single item (e.g. carton of milk) or multiple items as a collection (e.g. a gun)
            base: jsonUtil.deserialize(jsonUtil.serialize(traderDetailsToAdd)) as ITraderBase,
            questassort: {
                started: {},
                success: {},
                fail: {}
            } // Empty object as trader has no assorts unlocked by quests
        };
    }

    /**
     * Create assorts for trader and add milk and a gun to it
     * @returns ITraderAssort
     */
    private createAssortTable(tables: IDatabaseTables, jsonUtil: JsonUtil): ITraderAssort
    {
        // Create a blank assort object, ready to have items added
        const assortTable: ITraderAssort = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        }

        const MILK_ID = "575146b724597720a27126d5"; // Can find item ids in `database\templates\items.json`
        // View function documentation for what all the parameters are
        this.addSingleItemToAssort(assortTable, MILK_ID, true, 9999999, 1, Money.ROUBLES, 1);

        // Get the mp133 preset and add to the traders assort (Could make your own Items[] array, doesnt have to be presets)
        const mp133GunPreset = tables.globals.ItemPresets["584148f2245977598f1ad387"]._items;
        this.addCollectionToAssort(jsonUtil, assortTable, mp133GunPreset, false, 5, 1, Money.ROUBLES, 500);

        return assortTable;
    }

    /**
     * Add item to assortTable + barter scheme + loyalty level objects
     * @param assortTable trader assorts to add item to
     * @param itemTpl Items tpl to add to traders assort
     * @param unlimitedCount Can an unlimited number of this item be purchased from trader
     * @param stackCount Total size of item stack trader sells
     * @param loyaltyLevel Loyalty level item can be purchased at
     * @param currencyType What currency does item sell for
     * @param currencyValue Amount of currency item can be purchased for
     */
    private addSingleItemToAssort(assortTable: ITraderAssort, itemTpl: string, unlimitedCount: boolean, stackCount: number, loyaltyLevel: number, currencyType: Money, currencyValue: number)
    {
        // Define item in the table
        const newItem: Item = {
            _id: itemTpl,
            _tpl: itemTpl,
            parentId: "hideout",
            slotId: "hideout",
            upd: {
                UnlimitedCount: unlimitedCount,
                StackObjectsCount: stackCount
            }
        };
        assortTable.items.push(newItem);

        // Barter scheme holds the cost of the item + the currency needed (doesnt need to be currency, can be any item, this is how barter traders are made)
        assortTable.barter_scheme[itemTpl] = [
            [
                {
                    count: currencyValue,
                    _tpl: currencyType
                }
            ]
        ];

        // Set loyalty level needed to unlock item
        assortTable.loyal_level_items[itemTpl] = loyaltyLevel;
    }

    /**
     * Add a complex item to trader assort (item with child items)
     * @param assortTable trader assorts to add items to
     * @param jsonUtil JSON utility class
     * @param items Items array to add to assort
     * @param unlimitedCount Can an unlimited number of this item be purchased from trader
     * @param stackCount Total size of item stack trader sells
     * @param loyaltyLevel Loyalty level item can be purchased at
     * @param currencyType What currency does item sell for
     * @param currencyValue Amount of currency item can be purchased for
     */
    private addCollectionToAssort(jsonUtil: JsonUtil, assortTable: ITraderAssort, items: Item[], unlimitedCount: boolean, stackCount: number, loyaltyLevel: number, currencyType: Money, currencyValue: number): void
    {
        // Deserialize and serialize to ensure we dont alter the original data
        const collectionToAdd: Item[] = jsonUtil.deserialize(jsonUtil.serialize(items));

        // Update item base with values needed to make item sellable by trader
        collectionToAdd[0].upd = {
            UnlimitedCount: unlimitedCount,
            StackObjectsCount: stackCount
        }
        collectionToAdd[0].parentId = "hideout";
        collectionToAdd[0].slotId = "hideout";

        // Push all the items into the traders assort table
        assortTable.items.push(...collectionToAdd);

        // Barter scheme holds the cost of the item + the currency needed (doesnt need to be currency, can be any item, this is how barter traders are made)
        assortTable.barter_scheme[collectionToAdd[0]._id] = [
            [
                {
                    count: currencyValue,
                    _tpl: currencyType
                }
            ]
        ];

        // Set loyalty level needed to unlock item
        assortTable.loyal_level_items[collectionToAdd[0]._id] = loyaltyLevel;
    }

    /**
     * Add traders name/location/description to the locale table
     * @param tables database tables
     * @param fullName fullname of trader
     * @param firstName first name of trader
     * @param nickName nickname of trader
     * @param location location of trader
     * @param description description of trader
     */
    private addTraderToLocales(tables: IDatabaseTables, fullName: string, firstName: string, nickName: string, location: string, description: string)
    {
        // For each language, add locale for the new trader
        const locales = Object.values(tables.locales.global) as Record<string, string>[];
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }

    private addItemToLocales(tables: IDatabaseTables, itemTpl: string, name: string, shortName: string, Description: string)
    {
        // For each language, add locale for the new trader
        const locales = Object.values(tables.locales.global) as Record<string, string>[];
        for (const locale of locales) {
            locale[`${itemTpl} Name`] = name;
            locale[`${itemTpl} ShortName`] = shortName;
            locale[`${itemTpl} Description`] = Description;
        }
    }
}

module.exports = { mod: new SampleTrader() }