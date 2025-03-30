import { DependencyContainer } from "tsyringe";

import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ImporterUtil } from "@spt/utils/ImporterUtil";
import { ConfigsModelBase } from "./model/ConfigsModel";
import { IPreSptLoadModAsync } from "@spt/models/external/IPreSptLoadModAsync";

class Mod implements IPreSptLoadModAsync {
    public async preSptLoadAsync(container: DependencyContainer): Promise<void> {
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        const importerUtil = container.resolve<ImporterUtil>("ImporterUtil");
        const modImporter = container.resolve<PreSptModLoader>("PreSptModLoader");
        const path = modImporter.getModPath("16ImporterUtil");

        const configPath = `${path}config/`;
        const configs = await importerUtil.loadAsync<ConfigsModelBase>(configPath);
        logger.info(
            `16ImporterUtil Configurations found: ${JSON.stringify(configs)}`,
        );
    }
}

export const mod = new Mod();
