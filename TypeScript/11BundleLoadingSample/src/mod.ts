import { DependencyContainer } from "tsyringe";

import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

class Mod implements IPostAkiLoadMod
{
    public postAkiLoad(container: DependencyContainer): void
    {
        // get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");

        logger.info("Loading: Bundle Loading Sample");
    }
}

export const mod = new Mod();
