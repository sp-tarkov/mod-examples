"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("../../../../obj/models/spt/logging/LogTextColor");
const LogBackgroundColor_1 = require("../../../../obj/models/spt/logging/LogBackgroundColor");
class Mod {
    load(container) {
        // Database will be empty in here
        const databaseServer = container.resolve("DatabaseServer");
        const logger = container.resolve("WinstonLogger");
        logger.logWithColor(`Database item table state: ${databaseServer.getTables().templates} (<<< should be null)`, LogTextColor_1.LogTextColor.red, LogBackgroundColor_1.LogBackgroundColor.yellow);
    }
    loadAfterDbInit(container) {
        // Database will be loaded, this is the fresh state of the DB so NOTHING from the AKI
        // logic has modified anything yet. This is the DB loaded straight from the JSON files
        const databaseServer = container.resolve("DatabaseServer");
        const logger = container.resolve("WinstonLogger");
        logger.logWithColor(`Database item size: ${Object.entries(databaseServer.getTables().templates.items).length}`, LogTextColor_1.LogTextColor.red, LogBackgroundColor_1.LogBackgroundColor.yellow);
        // lets do a quick modification and see how this reflect later on, on the delayedLoad()
        // find the nvgs item by its Id
        const nvgs = databaseServer.getTables().templates.items["5c0558060db834001b735271"];
        // Lets log the state before the modification:
        logger.logWithColor(`NVGs default CanSellOnRagfair: ${nvgs._props.CanSellOnRagfair}`, LogTextColor_1.LogTextColor.red, LogBackgroundColor_1.LogBackgroundColor.yellow);
        // update one of its properties to be true
        nvgs._props.CanSellOnRagfair = true;
    }
    delayedLoad(container) {
        // The modification we made above would have been processed by now by AKI, so any values we changed had
        // already been passed through the initial lifecycles (OnLoad) of AKI.
        const databaseServer = container.resolve("DatabaseServer");
        const logger = container.resolve("WinstonLogger");
        // find the nvgs item again by its Id
        const nvgs = databaseServer.getTables().templates.items["5c0558060db834001b735271"];
        // Lets log the state, this value should be true:
        logger.logWithColor(`NVGs modified CanSellOnRagfair: ${nvgs._props.CanSellOnRagfair}`, LogTextColor_1.LogTextColor.red, LogBackgroundColor_1.LogBackgroundColor.yellow);
    }
}
module.exports = { mod: new Mod() };
