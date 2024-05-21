import { DependencyContainer } from "tsyringe";

import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { LauncherController } from "@spt/controllers/LauncherController";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ILoginRequestData } from "@spt/models/eft/launcher/ILoginRequestData";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { SaveServer } from "@spt/servers/SaveServer";

class Mod implements IPreSptLoadMod
{
    // DO NOT leave static references to ANY resolved dependency.
    // ALWAYS use the container to resolve dependencies
    // ****** ALWAYS *******
    private static container: DependencyContainer;

    // Perform these actions before server fully loads
    public preSptLoad(container: DependencyContainer): void
    {
        // We will save a reference to the dependency container to resolve dependencies
        // that we may need down the line
        Mod.container = container;

        // Wait until LauncherController gets resolved by the server and run code afterwards to replace
        // the login() function with the one below called 'replacementFunction()
        container.afterResolution("LauncherController", (_t, result: LauncherController) =>
        {
            // We want to replace the original method logic with something different
            result.login = (info: ILoginRequestData) =>
            {
                return this.replacementFunction(info);
            }
            // The modifier Always makes sure this replacement method is ALWAYS replaced
        }, {frequency: "Always"});
    }

    // our new replacement function, ready to be used
    public replacementFunction(info: ILoginRequestData): string
    {
        // The original method requires the save server to be loaded
        const saveServer = Mod.container.resolve<SaveServer>("SaveServer");

        // The logic below is the original login method logic
        let originalReturn = "";
        for (const sessionID in saveServer.getProfiles())
        {
            const account = saveServer.getProfile(sessionID).info;
            if (info.username === account.username)
            {
                originalReturn = sessionID;
                break;
            }
        }

        // This is now extra stuff we want to add
        // We resolve 2 more dependencies: The logger and the DatabaseServer
        const logger = Mod.container.resolve<ILogger>("WinstonLogger");
        const dbServer = Mod.container.resolve<DatabaseServer>("DatabaseServer");

        // As an example Im counting the amount of loaded items on the DB
        const loadedItems = Object.entries(dbServer.getTables().templates.items).length;
        // Lets do a few informational messages
        logger.success(`User ${info.username} logged in to SPT, there are ${loadedItems} items loaded into the database`);
        logger.success(originalReturn.length > 0 ? `User session ID: ${originalReturn}` : "User not found");

        // And finally return whatever we were supposed to return through this function
        return originalReturn;
    }
}

export const mod = new Mod();
