import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { IInventoryConfig } from "@spt/models/spt/config/IInventoryConfig";
import { DatabaseService } from "@spt/services/DatabaseService";

class Mod implements IPostDBLoadMod, IPostSptLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        // Resolve the CustomItemService container
        const databaseService = container.resolve<DatabaseService>("DatabaseService");
        const customItem = container.resolve<CustomItemService>("CustomItemService");
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const inventoryConfig : IInventoryConfig = configServer.getConfig(ConfigTypes.INVENTORY);
        const tables: IDatabaseTables = databaseService.getTables();

        //Example of adding new item by cloning existing item using createclonedetails
        const exampleCloneItem: NewItemFromCloneDetails = {
            itemTplToClone: "6489b2b131a2135f0d7d0fcb", //the item we want to clone, in this example i will cloning the sealed weapon crate
            overrideProperties: {
                Name: "Custom Lootbox",
                ShortName: "Custom Lootbox",
                Description: "A custom lootbox container",
                Weight: 15,

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item, in this example i am modifying the name, shortname, description, and weight
            parentId: "62f109593b54472778797866", //ParentId refers to the Node item the container will be under, you can check it in https://db.sp-tarkov.com/search
            newId: "new_crate_with_randomized_content", //The new id of our cloned item
            fleaPriceRoubles: 50000, //Self explanatary
            handbookPriceRoubles: 42500,
            handbookParentId: "62f109593b54472778797866", //Handbook Parent Id refers to the category the container will be under
            //Handbook parent can be found in SPT_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Custom Lootbox",
                    shortName: "Custom Lootbox",
                    description: "A custom lootbox container",
                },
            },
        };

        customItem.createItemFromClone(exampleCloneItem); //Basically calls the function and tell the server to add our Cloned new item into the server

        // Change item _name to remove it from the *actual* sealed weapon crate logic, this removes it from airdrops and allows easier access to change the contents
        const customIteminDB = tables.templates.items["new_crate_with_randomized_content"];
        customIteminDB._name = "new_crate_with_randomized_content";

        // Add to inventory config with custom item pool
        inventoryConfig.randomLootContainers["new_crate_with_randomized_content"] = {
            rewardCount: 6,
            foundInRaid: true,
            rewardTplPool: {
                "57514643245977207f2c2d09": 1,
                "544fb62a4bdc2dfb738b4568": 1,
                "57513f07245977207e26a311": 1,
                "57513f9324597720a7128161": 1,
                "57513fcc24597720a31c09a6": 1,
                "5e8f3423fd7471236e6e3b64": 1,
                "60b0f93284c20f0feb453da7": 1,
                "5734773724597737fd047c14": 1,
                "59e3577886f774176a362503": 1,
                "57505f6224597709a92585a9": 1,
                "544fb6cc4bdc2d34748b456e": 1
            }
        };
    }

    //Check if our item is in the server or not
    public postSptLoad(container: DependencyContainer): void {
        const databaseService = container.resolve<DatabaseService>("DatabaseService");
        const item = databaseService.getTables().templates.items;

        console.log(item["new_crate_with_randomized_content"]._props)
    }
}

export const mod = new Mod();
