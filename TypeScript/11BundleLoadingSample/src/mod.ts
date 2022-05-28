import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

class Mod implements IMod
{
    public load(container: DependencyContainer): void
    { 
        return;
    }

    public delayedLoad(container: DependencyContainer): void
    {
		// get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");
		
        logger.info("Loading: Bundle Loading Sample");
	}
}

module.exports = { mod: new Mod() }