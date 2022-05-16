import type { DependencyContainer } from "tsyringe";

import { IMod } from "../types/@types/external/mod";
import type { ILogger } from "../types/@types/spt/utils/ILogger";
import * as modConfig from "../config/config.json";

class Mod implements IMod
{
    // not used for this example
    public load(container: DependencyContainer): void
    { return }

    public delayedLoad(container: DependencyContainer): void
    { 
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        // log the 'myProperty' value to the console
        logger.info(`here is the value from my config: ${modConfig.myProperty}`);
    }
}

module.exports = { mod: new Mod() }