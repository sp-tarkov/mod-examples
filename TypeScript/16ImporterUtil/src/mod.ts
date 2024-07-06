import { DependencyContainer } from "tsyringe";

import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ImporterUtil } from "@spt/utils/ImporterUtil";
import { ConfigsModelBase } from "./model/ConfigsModel";

class Mod implements IPreSptLoadMod {
    public preSptLoad(container: DependencyContainer): void {
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        const importerUtil = container.resolve<ImporterUtil>("ImporterUtil");
        const modImporter = container.resolve<PreSptModLoader>("PreSptModLoader");
        const path = modImporter.getModPath("16ImporterUtil");

        const configPath = `${path}config/`;
        const configs = importerUtil.loadRecursive<ConfigsModelBase>(configPath);
        logger.info(
            `16ImporterUtil Configurations found: ${JSON.stringify(configs)}`,
        );
    }
}

export const mod = new Mod();
