import { DependencyContainer } from "tsyringe";

import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import { IPreSptLoadModAsync } from "@spt/models/external/IPreSptLoadModAsync";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ImporterUtil } from "@spt/utils/ImporterUtil";
import { ConfigsModelBase } from "./model/ConfigsModel";

class Mod implements IPreSptLoadModAsync {
    public async preSptLoadAsync(container: DependencyContainer): Promise<void> {
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        const importerUtil = container.resolve<ImporterUtil>("ImporterUtil");
        const modImporter = container.resolve<PreSptModLoader>("PreSptModLoader");
        const path = modImporter.getModPath("16ImporterUtil");

        const configPath = `${path}config/`;
        return importerUtil
            .loadAsync<ConfigsModelBase>(configPath)
            .then((configs) => {
                logger.info(
                    `17ImporterWithDependency2 Configurations found: ${JSON.stringify(
                        configs,
                    )}`,
                );
            });
    }
}

export const mod = new Mod();
