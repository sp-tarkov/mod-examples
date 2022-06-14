/**
 * authors: - Wulv
 *          - Revingly
*/

"use strict";

class Mod {
    constructor() {
        this.mod = "Revingly-FoodDrink-Redux";
        this.funcptr = HttpServer.onRespond["IMAGE"];

        Logger.info(`Loading: ${this.mod}`);
        ModLoader.onLoad[this.mod] = this.load.bind(this);
        HttpServer.onRespond["IMAGE"] = this.getImage.bind(this);
        this.itemsToSell = {};
    }

    getImage(sessionID, req, resp, body) {
        const filepath = `${ModLoader.getModPath(this.mod)}res/`;

        if (req.url.includes("/avatar/FoodDrink")) {
            HttpServer.sendFile(resp, `${filepath}FoodDrink.jpg`);
            return;
        }

        this.funcptr(sessionID, req, resp, body);
    }
	


    load() {
        Logger.info(`Loading: ${this.mod}`);

        const filepath = `${ModLoader.getModPath(this.mod)}db/`;

        DatabaseServer.tables.traders.FoodDrink = {
            "assort": this.createFoodAndDrinkAssortTable(),
            "base": JsonUtil.deserialize(VFS.readFile(`${filepath}base.json`))
        };
        
        let locales = DatabaseServer.tables.locales.global;

        for (const locale in locales) {
            locales[locale].trading.FoodDrink = {
                "FullName": "Food & Drink",
                "FirstName": "Food & Drink",
                "Nickname": "Food & Drink",
                "Location": "In the food shop",
                "Description": "Get your food and drink here!"
            };
        }

        DatabaseServer.tables.locales.global = locales;

        // Add refresh time in seconds
		const traderRefreshConfig = {"traderId": "FoodDrink","seconds": 3600}
		TraderConfig["updateTime"].push(traderRefreshConfig);
    }

    createFoodAndDrinkAssortTable() {
        const { original_prices } = require('./config.json');
        const FOOD_ID = "5448e8d04bdc2ddf718b4569";
        const WATER_ID = "5448e8d64bdc2dce718b4568";
        const FOOD_CONTAINER_ID = "5c093db286f7740a1b2617e3";
        const SELL_AMOUNT = 10000;
        const ROUBLE_ID = "5449016a4bdc2d6f028b456f";
        const items = DatabaseServer.tables.templates.items;
        const prices = DatabaseServer.tables.templates.prices;
        
        return Object
            .values(items)
            .filter(item => item._parent === FOOD_ID || item._parent === WATER_ID || item._id === FOOD_CONTAINER_ID)
            .map(item => {
                return {
                    "_id": HashUtil.generate(),
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
                            "count": original_prices ? prices[item._tpl] : SELL_AMOUNT ,
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

module.exports.Mod = Mod;
