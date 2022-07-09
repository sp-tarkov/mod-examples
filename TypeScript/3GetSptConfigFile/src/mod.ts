import { DependencyContainer } from "tsyringe";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";

import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { IBotConfig } from "@spt-aki/models/spt/config/IBotConfig";

class Mod implements IPostAkiLoadMod
{
    public postAkiLoad(container: DependencyContainer): void {
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        // get the config server
        const configServer = container.resolve<ConfigServer>("ConfigServer");

        // Request bot config
        // Required - ConfigTypes.BOT is the enum of the config we want, others include ConfigTypes.Airdrop
        const botConfig = configServer.getConfig<IBotConfig>(ConfigTypes.BOT);

        // log the original pmc difficulty
        logger.info(`here is the original bot pmc difficulty: ${botConfig.pmc.difficulty}`)

        // adjust the difficulty
        botConfig.pmc.difficulty = "easy";

        // log the new pmc difficulty
        logger.info(`here is the altered bot pmc difficulty: ${botConfig.pmc.difficulty}`)
    }
}

module.exports = { mod: new Mod() }