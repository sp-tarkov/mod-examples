import { DependencyContainer } from "tsyringe";

import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { LogBackgroundColor } from "@spt-aki/models/spt/logging/LogBackgroundColor";


class Mod implements IPreAkiLoadMod, IPostAkiLoadMod, IPostDBLoadMod
{
    public preAkiLoad(container: DependencyContainer): void {
        // Database will be empty in here
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.logWithColor(`Database item table state: ${databaseServer.getTables().templates} (<<< should be undefined)`, LogTextColor.RED, LogBackgroundColor.YELLOW);
    }
    
    public postDBLoad(container: DependencyContainer): void {
        // Database will be loaded, this is the fresh state of the DB so NOTHING from the AKI
        // logic has modified anything yet. This is the DB loaded straight from the JSON files
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.logWithColor(`Database item size: ${Object.entries(databaseServer.getTables().templates.items).length}`, LogTextColor.RED, LogBackgroundColor.YELLOW);
        // lets do a quick modification and see how this reflect later on, on the postAkiLoad()
        
        // find the nvgs item by its Id
        const nvgs = databaseServer.getTables().templates.items["5c0558060db834001b735271"];
        // Lets log the state before the modification:
        logger.logWithColor(`NVGs default CanSellOnRagfair: ${nvgs._props.CanSellOnRagfair}`, LogTextColor.RED, LogBackgroundColor.YELLOW);
        // update one of its properties to be true
        nvgs._props.CanSellOnRagfair = true;
    }

    public postAkiLoad(container: DependencyContainer): void {
        // The modification we made above would have been processed by now by AKI, so any values we changed had
        // already been passed through the initial lifecycles (OnLoad) of AKI.
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const logger = container.resolve<ILogger>("WinstonLogger");

        // find the nvgs item again by its Id
        const nvgs = databaseServer.getTables().templates.items["5c0558060db834001b735271"];
        // Lets log the state, this value should be true:
        logger.logWithColor(`NVGs modified CanSellOnRagfair: ${nvgs._props.CanSellOnRagfair}`, LogTextColor.RED, LogBackgroundColor.YELLOW);
    }
}

module.exports = { mod: new Mod() }