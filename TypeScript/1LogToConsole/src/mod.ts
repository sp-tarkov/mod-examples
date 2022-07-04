import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

class Mod implements IMod
{
	// Code added here will load BEFORE the server has started loading
    public load(container: DependencyContainer): void
    { 
        // get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");
		
        logger.info("I am logging info!");
        logger.warning("I am logging a warning!");
        logger.error("I am logging an error!");
		//logger.logWithColor("I am logging with color!", red, yellow);
    }

    // Code added here will be run AFTER the server has started
	// not used in this example
    public delayedLoad(container: DependencyContainer): void
    { return }
}

module.exports = { mod: new Mod() }