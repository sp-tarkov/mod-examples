import { DependencyContainer } from "tsyringe";

import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";

class Mod implements IPostSptLoadMod
{
    private modConfig = require("../config/config.json");

    public postSptLoad(container: DependencyContainer): void {
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        // log the 'myProperty' value to the console
        logger.info(`here is the value from my config: ${this.modConfig.myProperty}`);
    }
}

export const mod = new Mod();
