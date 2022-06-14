import { DependencyContainer } from "tsyringe";
import type { IMod } from "../types/models/external/mod";
import type { ILogger } from "../types/models/spt/utils/ILogger";
import type { InitialModLoader } from "../types/loaders/InitialModLoader";
import type { DatabaseServer } from "../types/servers/DatabaseServer";
import type { IDatabaseTables } from "../types/models/spt/server/IDatabaseTables";
import type { HashUtil } from "../types/utils/HashUtil";
import type { ImageRouteService } from "../types/services/mod/image/ImageRouteService";
import type { ConfigServer } from "../types/servers/ConfigServer";
import { ConfigTypes } from "../types/models/enums/ConfigTypes";
import type { ITraderBase } from "../types/models/eft/common/tables/ITrader";
import type { ITraderConfig, UpdateTime } from '../types/models/spt/config/ITraderConfig';
import type { StaticRouterModService } from '../types/services/mod/staticRouter/StaticRouterModService';
import { original_prices } from "../config/config.json";
import * as baseJson from "../db/base.json";
import { JsonUtil } from "../types/utils/JsonUtil";

class SampleTrader implements IMod {
    mod: string
    tables: IDatabaseTables
    initialModLoader: InitialModLoader
    hashUtil: HashUtil

    constructor() {
        this.mod = "SampleTrader";
    }


    // Perform these actions before server fully loads
    public load(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.info(`Loading: ${this.mod}`);

        this.initialModLoader = container.resolve<InitialModLoader>("InitialModLoader");
        this.hashUtil = container.resolve<HashUtil>("HashUtil");
        const imageRouteService = container.resolve<ImageRouteService>("ImageRouteService");
        const staticRouterModService = container.resolve<StaticRouterModService>("StaticRouterModService");
        staticRouterModService.registerStaticRouter(
            "SampleTraderImage",
            [
                {
                    url: `${baseJson.avatar}`,
                    action: (url, info, sessionId, output) => {
                        logger.info("Custom static route hit")
                        return JSON.stringify({ response: "OK" });
                    }
                }
            ],
            "custom-static-my-mod"
        );

        const test: string = ConfigTypes.CORE;
        switch (test) {
            case ConfigTypes.CORE:
                break;
            case ConfigTypes.HIDEOUT:
                break;
            case ConfigTypes.BOT:
                break;
            default:
                break
        }

        const imageFilepath = `${this.initialModLoader.getModPath(this.mod)}res`;
        imageRouteService.addRoute(baseJson.avatar, `${imageFilepath}/cat.jpg`);

        // Add refresh time in seconds when Config server allows to set configs
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const traderRefreshConfig: UpdateTime = { traderId: "cat", seconds: 3600 }
        traderConfig.updateTime.push(traderRefreshConfig);
    }

    public delayedLoad(container: DependencyContainer): void {
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const jsonUtil = container.resolve<JsonUtil>("JsonUtil");

        this.tables = databaseServer.getTables();
        this.tables.traders = {
            ...this.tables.traders, cat: {
                assort: this.createFoodAndDrinkAssortTable(),
                base: jsonUtil.deserialize(jsonUtil.serialize(baseJson)) as ITraderBase,
                questassort: {}
            }
        };

        const locales = this.tables.locales.global;
        for (const locale in locales) {
            locales[locale].trading.cat = {
                FullName: "Cat",
                FirstName: "Cat",
                Nickname: "Cat",
                Location: "In the cat shop",
                Description: "This is the cat shop"
            };
        }

        this.tables.locales = { ...this.tables.locales, global: locales };
        databaseServer.setTables(this.tables);
    }

    createFoodAndDrinkAssortTable() {
        const FOOD_ID = "5448e8d04bdc2ddf718b4569";
        const WATER_ID = "5448e8d64bdc2dce718b4568";
        const FOOD_CONTAINER_ID = "5c093db286f7740a1b2617e3";
        const SELL_AMOUNT = 10000;
        const ROUBLE_ID = "5449016a4bdc2d6f028b456f";
        const items = this.tables.templates.items;
        const prices = this.tables.templates.prices;

        return Object
            .values(items)
            .filter(item => item._parent === FOOD_ID || item._parent === WATER_ID || item._id === FOOD_CONTAINER_ID)
            .map(item => {
                return {
                    "_id": this.hashUtil.generate(),
                    "_tpl": item._id,
                    "parentId": "hideout",
                    "slotId": "hideout",
                    "upd": {
                        "UnlimitedCount": true,
                        "StackObjectsCount": 999999999
                    }
                }
            })
            .reduce((acc, item) => {
                acc.items.push(item);
                acc.barter_scheme[item._id] = [
                    [
                        {
                            "count": original_prices ? prices[item._tpl] : SELL_AMOUNT,
                            "_tpl": ROUBLE_ID
                        }
                    ]
                ];
                acc.loyal_level_items[item._id] = 1;
                return acc;
            },
                {
                    items: [], barter_scheme: {}, loyal_level_items: {}
                }
            );
    }
}

module.exports = { mod: new SampleTrader() }