import { DependencyContainer } from "tsyringe";

import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

class Mod implements IPostAkiLoadMod
{
    private modConfig = require("../config/config.json");

    public postAkiLoad(container: DependencyContainer): void {
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        // log the 'myProperty' value to the console
        logger.info(`here is the value from my config: ${this.modConfig.myProperty}`);
    }
}

export const mod = new Mod();
