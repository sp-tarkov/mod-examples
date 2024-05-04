import { DependencyContainer } from "tsyringe";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";

import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ILocationConfig } from "@spt-aki/models/spt/config/ILocationConfig";

class Mod implements IPostAkiLoadMod
{
    public postAkiLoad(container: DependencyContainer): void
	{
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        // get the config server so we can get a config with it
        const configServer = container.resolve<ConfigServer>("ConfigServer");

        // Request the map location config
        // Required - ConfigTypes.LOCATION is the enum of the config we want, others include ConfigTypes.Airdrop
        const locationConfig: ILocationConfig = configServer.getConfig<ILocationConfig>(ConfigTypes.LOCATION);

        // Log the original customs loose loot multipler
        logger.info(`Here is the original customs map loose loot multipler: ${locationConfig.looseLootMultiplier.bigmap}`)

        // Adjust the multipler (customs is called bigmap in bsg land)
        locationConfig.looseLootMultiplier.bigmap = 10;

        // Log the new multipler
        logger.info(`Here is the altered customs map loose loot multipler: ${locationConfig.looseLootMultiplier.bigmap}`)
    }
}

module.exports = { mod: new Mod() }