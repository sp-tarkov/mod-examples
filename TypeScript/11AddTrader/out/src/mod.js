"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../config/config.json");
const baseJson = __importStar(require("../db/base.json"));
class SampleTrader {
    constructor() {
        this.mod = "SampleTrader";
    }
    // Perform these actions before server fully loads
    load(container) {
        const logger = container.resolve("WinstonLogger");
        logger.info(`Loading: ${this.mod}`);
        this.initialModLoader = container.resolve("InitialModLoader");
        this.hashUtil = container.resolve("HashUtil");
        const imageRouteService = container.resolve("ImageRouteService");
        const staticRouterModService = container.resolve("StaticRouterModService");
        staticRouterModService.registerStaticRouter("SampleTraderImage", [
            {
                url: `${baseJson.avatar}`,
                action: (url, info, sessionId, output) => {
                    logger.info("Custom static route hit");
                    return JSON.stringify({ response: "OK" });
                }
            }
        ], "custom-static-my-mod");
        const test = "aki-core" /* CORE */;
        switch (test) {
            case "aki-core" /* CORE */:
                break;
            case "aki-hideout" /* HIDEOUT */:
                break;
            case "aki-bot" /* BOT */:
                break;
            default:
                break;
        }
        const imageFilepath = `${this.initialModLoader.getModPath(this.mod)}res`;
        imageRouteService.addRoute(baseJson.avatar, `${imageFilepath}/cat.jpg`);
        // Add refresh time in seconds when Config server allows to set configs
        const configServer = container.resolve("ConfigServer");
        const traderConfig = configServer.getConfig("aki-trader" /* TRADER */);
        const traderRefreshConfig = { traderId: "cat", seconds: 3600 };
        traderConfig.updateTime.push(traderRefreshConfig);
    }
    delayedLoad(container) {
        const databaseServer = container.resolve("DatabaseServer");
        const jsonUtil = container.resolve("JsonUtil");
        this.tables = databaseServer.getTables();
        this.tables.traders = {
            ...this.tables.traders, cat: {
                assort: this.createFoodAndDrinkAssortTable(),
                base: jsonUtil.deserialize(jsonUtil.serialize(baseJson)),
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
            };
        })
            .reduce((acc, item) => {
            acc.items.push(item);
            acc.barter_scheme[item._id] = [
                [
                    {
                        "count": config_json_1.original_prices ? prices[item._tpl] : SELL_AMOUNT,
                        "_tpl": ROUBLE_ID
                    }
                ]
            ];
            acc.loyal_level_items[item._id] = 1;
            return acc;
        }, {
            items: [], barter_scheme: {}, loyal_level_items: {}
        });
    }
}
module.exports = { mod: new SampleTrader() };
