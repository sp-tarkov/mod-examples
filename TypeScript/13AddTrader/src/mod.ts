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
import { ILocaleGlobalBase } from "@spt-aki/models/spt/server/ILocaleBase";

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

        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const jsonUtil = container.resolve<JsonUtil>("JsonUtil");

        // Keep a reference to the tables
        const tables = databaseServer.getTables();

        // Add the new trader to the trader lists in DatabaseServer
        tables.traders[baseJson._id] = {
            assort: this.createAssortTable(),
            base: jsonUtil.deserialize(jsonUtil.serialize(baseJson)) as ITraderBase,
            questassort: undefined
        };

        // For each language, add locale for the new trader
        const locales = Object.values(tables.locales.global) as ILocaleGlobalBase[];
        for (const locale of locales) {
            locale.trading[baseJson._id] = {
                FullName: baseJson.name,
                FirstName: "Cat",
                Nickname: baseJson.nickname,
                Location: baseJson.location,
                Description: "This is the cat shop"
            };
        }
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
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        }

        // Keep reference of a few IDs
        const MILK_ID = "575146b724597720a27126d5";
        const ROUBLE_ID = "5449016a4bdc2d6f028b456f";

        // Define item in the table
        const newMilkItem: Item = {
            _id: MILK_ID,
            _tpl: MILK_ID,
            parentId: "hideout",
            slotId: "hideout",
            upd: {
                UnlimitedCount: true,
                StackObjectsCount: 999999999
            }
        };
        assortTable.items.push(newMilkItem);

        // Define the item price to be 1 RUB
        assortTable.barter_scheme[MILK_ID] = [
            [
                {
                    count: 1,
                    _tpl: ROUBLE_ID
                }
            ]
        ];

        // Unlockable at level 1 (from the start)
        assortTable.loyal_level_items[MILK_ID] = 1;

        return assortTable;
    }
}

module.exports = { mod: new SampleTrader() }