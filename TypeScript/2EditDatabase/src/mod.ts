import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseService } from "@spt/services/DatabaseService";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { BaseClasses } from "@spt/models/enums/BaseClasses";

class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void
    {
        // Get database service from server
        const databaseService = container.resolve<DatabaseService>("DatabaseService");

        // Get all the in-memory item data found in /assets/database/templates/items.json
        const itemsInDb = databaseService.getItems();

        // ------------------------------------------------------------------
        // Example #1
        // Make the LedX item sellable on flea market

        // Find the LedX item by its Id
        const ledx = itemsInDb["5c0530ee86f774697952d952"]; // The long string of characters is the ledx Id, you can find these Ids via: https://db.sp-tarkov.com/search

        // Update the LedX `CanSellOnRagfair` property to be true
        // This will alter ALL LedX items
        ledx._props.CanSellOnRagfair = true;

        // ------------------------------------------------------------------
        // Example #2
        // Set flea market min level to be 1 for all players

        // Get globals data from database
        const globals = databaseService.getGlobals();

        // Set ragfair property `minUserLevel` to 1
        globals.config.RagFair.minUserLevel = 1;

        // ------------------------------------------------------------------
        // Example #3
        // Loop over all magazines in database and make them weigh nothing

        // Prepare the ItemHelper class so we can use it
        const itemHelper: ItemHelper = container.resolve<ItemHelper>("ItemHelper");

        // Get all items in the database as an array so we can loop over them later
        // `databaseService.getItems()` returns a dictionary, the key being the items template id, the value being the item itself,
        // We want to convert it into an array so we can loop over all the items easily
        // Object.values lets us grab the 'value' part as an array and ignore the 'key' part
        const items = Object.values(itemsInDb);

        // Use the `ItemHelper` class to assist us in getting only magazines
        // We are filtering all items to only those with a base class of MAGAZINE (5448bc234bdc2d3c308b4569)
        const magazines = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.MAGAZINE));

        // Loop over all the magazines we found using above code
        for (const magazine of magazines)
        {
            // Check the magazine has a weight property before we edit it
            if (magazine._props.Weight)
            {
                // Set its weight to 0
                magazine._props.Weight = 0;
            }
        }

        // ------------------------------------------------------------------
        // Example #4
        // Adjust the red keycards flea price to be one million

        // Get all flea prices
        // The prices are stored as a dictionary too, the key is the items ID, the value is the rouble price
        const fleaPrices = databaseService.getPrices();

        // Edit the red keycard price
        fleaPrices["5c1d0efb86f7744baf2e7b7b"] = 1000000; // We can use this site to find item Ids: https://db.sp-tarkov.com/search
    }
}

export const mod = new Mod();
