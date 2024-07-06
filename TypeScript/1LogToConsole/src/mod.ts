import { DependencyContainer } from "tsyringe";

import { IPreAkiLoadMod } from "@spt/models/external/IPreAkiLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { LogBackgroundColor } from "@spt/models/spt/logging/LogBackgroundColor";

class Mod implements IPreAkiLoadMod
{
    // Code added here will load BEFORE the server has started loading
    public preAkiLoad(container: DependencyContainer): void
    {
        // get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");

        logger.info("I am logging info!");
        logger.warning("I am logging a warning!");
        logger.error("I am logging an error!");
        logger.logWithColor("I am logging with color!", LogTextColor.YELLOW, LogBackgroundColor.RED);
    }
}

export const mod = new Mod();
