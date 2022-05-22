import type { DependencyContainer } from "tsyringe";
import { IMod } from "../types/models/external/mod";
import { ILogger } from "../types/models/spt/utils/ILogger";

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
    }

    // Code added here will be run AFTER the server has started
    public delayedLoad(container: DependencyContainer): void
    { return }
}

module.exports = { mod: new Mod() }