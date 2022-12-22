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

// The new trader config
import * as baseJson from "../db/base.json";

class SampleTrader implements IPreAkiLoadMod, IPostDBLoadMod {
    mod: string
    logger: ILogger

    constructor() {
        this.mod = "13AddTrader";
    }

    public preAkiLoad(container: DependencyContainer): void {
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.logger.debug(`[${this.mod}] Loading... `);
        
        this.registerProfileImage(container);
        
        this.setupTraderUpdateTime(container);
        
        this.logger.debug(`[${this.mod}] Loaded`);
    }
    
    public postDBLoad(container: DependencyContainer): void {
        this.logger.debug(`[${this.mod}] Delayed Loading... `);

        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const jsonUtil = container.resolve<JsonUtil>("JsonUtil");

        // Keep a reference to the tables
        const tables = databaseServer.getTables();

        // Add the new trader to the trader lists in DatabaseServer
        tables.traders[baseJson._id] = {
            assort: this.createAssortTable(),
            base: jsonUtil.deserialize(jsonUtil.serialize(baseJson)) as ITraderBase,
            questassort: undefined
        };

        this.addTraderToLocales(tables, baseJson.name, "Cat", baseJson.nickname, baseJson.location, "This is the cat shop");

        this.logger.debug(`[${this.mod}] Delayed Loaded`);
    }

    private registerProfileImage(container: DependencyContainer): void {
        // Reference the mod "res" folder
        const preAkiModLoader = container.resolve<PreAkiModLoader>("PreAkiModLoader");
        const imageFilepath = `./${preAkiModLoader.getModPath(this.mod)}res`;

        // Register route pointing to the profile picture
        const imageRouter = container.resolve<ImageRouter>("ImageRouter");
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/cat.jpg`);
    }

    private setupTraderUpdateTime(container: DependencyContainer): void {
        // Add refresh time in seconds when Config server allows to set configs
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const traderRefreshConfig: UpdateTime = { traderId: baseJson._id, seconds: 3600 }
        traderConfig.updateTime.push(traderRefreshConfig);
    }

    private createAssortTable(): ITraderAssort {
        // Assort table
        const assortTable: ITraderAssort = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        }

        const MILK_ID = "575146b724597720a27126d5";
        this.addItemToAssort(assortTable, MILK_ID, true, 9999999, 1, Money.ROUBLES, 1);

        return assortTable;
    }

    /**
     * Add item to assortTable + barter scheme + loyalty level objects
     * @param assortTable trader assorts to add to
     * @param itemTpl items tpl to add
     * @param unlimitedCount Can item be purchased without limit
     * @param stackCount size of stack trader sells
     * @param loyaltyLevel loyalty level item can be purchased at
     * @param currencyType What currency does item sell for
     * @param currencyValue Amount of currency item can be purchased for
     */
    private addItemToAssort(assortTable: ITraderAssort, itemTpl: string, unlimitedCount: boolean, stackCount: number, loyaltyLevel: number, currencyType: Money, currencyValue: number) {
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

        // Define the item price to be 1 RUB
        assortTable.barter_scheme[itemTpl] = [
            [
                {
                    count: currencyValue,
                    _tpl: currencyType
                }
            ]
        ];

        // Unlockable at level 1 (from the start)
        assortTable.loyal_level_items[itemTpl] = loyaltyLevel;
    }

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
}

module.exports = { mod: new SampleTrader() }