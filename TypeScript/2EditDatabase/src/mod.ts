import { DependencyContainer } from "tsyringe";

import { IMod } from "@spt-aki/models/external/mod";
import { IAfterDBLoadMod } from "@spt-aki/models/external/IAfterDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class Mod implements IMod, IAfterDBLoadMod
{
    public loadAfterDbInit(container: DependencyContainer): void
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();

        // Find the ledx item by its Id
        const ledx = tables.templates.items["5c0530ee86f774697952d952"];

        // Update one of its properties to be true
        ledx._props.CanSellOnRagfair = true;


        // example #2
        // get globals settings and set flea market min level to be 1
        tables.globals.config.RagFair.minUserLevel = 1;
    }

    // not used for this example
    public load(container: DependencyContainer): void
    { return }

    // not used for this example
    public delayedLoad(container: DependencyContainer): void
    { return }
}

module.exports = { mod: new Mod() }