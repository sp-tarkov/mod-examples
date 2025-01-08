import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ItemTpl } from "@spt/models/enums/ItemTpl";

class Mod implements IPostDBLoadMod, IPostSptLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        // Resolve the CustomItemService container for use
        const CustomItem = container.resolve<CustomItemService>("CustomItemService");

        //Example of adding new item by cloning an existing item using `createCloneDetails`
        const ExampleCloneItem: NewItemFromCloneDetails = {
            itemTplToClone: ItemTpl.SHOTGUN_MP18_762X54R_SINGLESHOT_RIFLE, // Tpl of the item we want to clone, we're choosing the MP-18
            overrideProperties: { // These are the properties we will modify from the item we cloned, we are modifying the ammo used to be 12G
                Chambers: [
                    {
                        _name: "patron_in_weapon_000",
                        _id: "61f7c9e189e6fb1a5e3ea791",
                        _parent: "CustomMP18",
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "560d5e524bdc2d25448b4571",
                                        "5d6e6772a4b936088465b17c",
                                        "5d6e67fba4b9361bc73bc779",
                                        "5d6e6806a4b936088465b17e",
                                        "5d6e68dea4b9361bcc29e659",
                                        "5d6e6911a4b9361bd5780d52",
                                        "5c0d591486f7744c505b416f",
                                        "58820d1224597753c90aeb13",
                                        "5d6e68c4a4b9361b93413f79",
                                        "5d6e68a8a4b9360b6c0d54e2",
                                        "5d6e68e6a4b9361c140bcfe0",
                                        "5d6e6869a4b9361c140bcfde",
                                        "5d6e68b3a4b9361bca7e50b5",
                                        "5d6e6891a4b9361bd473feea",
                                        "5d6e689ca4b9361bc8618956",
                                        "5d6e68d1a4b93622fe60e845",
                                    ],
                                },
                            ],
                        },
                        _required: false,
                        _mergeSlotWithChildren: false,
                        _proto: "55d4af244bdc2d962f8b4571",
                    },
                ],
            },
            parentId: "5447b6094bdc2dc3278b4567", // ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: "677eed5f2e040616bc7246b6", // The new id of our cloned item - MUST be a valid mongo id, search online for mongo id generators
            fleaPriceRoubles: 50000, // Flea price of item
            handbookPriceRoubles: 42500, // Price of item in handbook
            handbookParentId: "5b5f78e986f77447ed5636b1", // Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Spt_Data\Server\database\templates.
            locales: {
                en: {
                    name: "MP-18 12g",
                    shortName: "Custom MP18",
                    description: "A custom MP18 chambered in 12G",
                },
            },
        };

        CustomItem.createItemFromClone(ExampleCloneItem); // Send our data to the function that creates our item
    }

    // Optional - check if our item is in the server or not
    public postSptLoad(container: DependencyContainer): void {
        const db = container.resolve<DatabaseServer>("DatabaseServer");
        const item = db.getTables().templates.items;

        console.log(item["CustomMP18"]._props);
    }
}

export const mod = new Mod();
