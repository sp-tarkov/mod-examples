import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { LauncherController } from "@spt-aki/controllers/LauncherController";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ILoginRequestData } from "@spt-aki/models/eft/launcher/ILoginRequestData";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { SaveServer } from "@spt-aki/servers/SaveServer";

class Mod implements IMod
{
    // DO NOT leave static references to ANY resolved dependency.
    // ALWAYS use the container to resolve dependencies
    // ****** ALWAYS *******
    private static container: DependencyContainer;

    // Perform these actions before server fully loads
    public load(container: DependencyContainer): void 
    {
        // We will save a reference to the dependency container to resolve dependencies
        // that we may need down the line
        Mod.container = container;

        // Wait until WatermarkLocale gets resolved by the server and run code afterwards to replace 
        // the getDescription() function with the one below called 'replacementFunction()
        container.afterResolution("LauncherController", (_t, result: LauncherController) => 
        {
            // We want to replace the original method logic with something different
            result.login = (info: ILoginRequestData) => 
            {
                // We are calling a replacement function, technically you could also do:
                // result.login = this.replacementFunction;
                return this.replacementFunction(info);
            }
            // The modifier Always makes sure this replacement method is ALWAYS replaced
        }, {frequency: "Always"});
    }

    // not used for this example
    public delayedLoad(container: DependencyContainer): void 
    {
        return 
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

module.exports = { mod: new Mod() }