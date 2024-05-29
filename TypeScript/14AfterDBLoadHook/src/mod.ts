import { DependencyContainer } from "tsyringe";

import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { LogBackgroundColor } from "@spt/models/spt/logging/LogBackgroundColor";
import { DatabaseService } from "@spt/services/DatabaseService";
import { ItemHelper } from "@spt/helpers/ItemHelper";


class Mod implements IPreSptLoadMod, IPostSptLoadMod, IPostDBLoadMod
{
    public preSptLoad(container: DependencyContainer): void
    {
        // Database will be empty in here
        const databaseService = container.resolve<DatabaseService>("DatabaseService");
        const logger = container.resolve<ILogger>("PrimaryLogger");
        logger.logWithColor(`Database item table state: ${databaseService.getTemplates()} (<<< should be undefined)`, LogTextColor.RED, LogBackgroundColor.YELLOW);
    }

    public postDBLoad(container: DependencyContainer): void
    {
        // Database will be loaded, this is the fresh state of the DB so NOTHING from the SPT
        // logic has modified anything yet. This is the DB loaded straight from the JSON files
        const databaseService = container.resolve<DatabaseService>("DatabaseService");
        const logger = container.resolve<ILogger>("PrimaryLogger");
        logger.logWithColor(`Database item size: ${Object.entries(databaseService.getItems()).length}`, LogTextColor.RED, LogBackgroundColor.YELLOW);
        // lets do a quick modification and see how this reflect later on, on the postSptLoad()

        // find the nvgs item by its Id
        const nvgs = databaseService.getItems()["5c0558060db834001b735271"];
        // Lets log the state before the modification:
        logger.logWithColor(`NVGs default CanSellOnRagfair: ${nvgs._props.CanSellOnRagfair}`, LogTextColor.RED, LogBackgroundColor.YELLOW);
        // update one of its properties to be true
        nvgs._props.CanSellOnRagfair = true;
    }

    public postSptLoad(container: DependencyContainer): void 
    {
        // The modification we made above would have been processed by now by SPT, so any values we changed had
        // already been passed through the initial lifecycles (OnLoad) of SPT.
        const itemHelper = container.resolve<ItemHelper>("ItemHelper");
        const logger = container.resolve<ILogger>("PrimaryLogger");

        // Find the nvgs item again by its Id using ItemHelper class (alternate way of getting items that has more saftey checks)
        const nvgs = itemHelper.getItem("5c0558060db834001b735271"); // Returns an array of 2 values, 1st is a bool, true if item is valid, 2nd is the item data
        if (nvgs[0])
        {
            // item was found in database, hooray

            // Assign a new variable so we can cleanly reference its _props data below
            const nvgsData = nvgs[1];

            // Lets log the state, this value should be true:
            logger.logWithColor(`NVGs modified CanSellOnRagfair: ${nvgsData._props.CanSellOnRagfair}`, LogTextColor.RED, LogBackgroundColor.YELLOW);
        }

    }
}

export const mod = new Mod();
