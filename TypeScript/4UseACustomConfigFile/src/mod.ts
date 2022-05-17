import type { DependencyContainer } from "tsyringe";

import { IMod } from "../types/@types/external/mod";
import type { ILogger } from "../types/@types/spt/utils/ILogger";

class Mod implements IMod
{
    private modConfig = require("../config/config.json");

    // not used for this example
    public load(container: DependencyContainer): void
    { return }

    public delayedLoad(container: DependencyContainer): void
    {
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        // log the 'myProperty' value to the console
        logger.info(`here is the value from my config: ${this.modConfig.myProperty}`);
    }
}

module.exports = { mod: new Mod() }