import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { IPreAkiLoadModAsync } from "@spt-aki/models/external/IPreAkiLoadModAsync";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ImporterUtil } from "@spt-aki/utils/ImporterUtil";
import { DependencyContainer } from "tsyringe";
import { ConfigsModelBase } from "./model/ConfigsModel";

class Mod implements IPreAkiLoadModAsync {
	public async preAkiLoadAsync(container: DependencyContainer): Promise<void> {
		// get logger
		const logger = container.resolve<ILogger>("WinstonLogger");

		const importerUtil = container.resolve<ImporterUtil>("ImporterUtil");
		const modImporter = container.resolve<PreAkiModLoader>("PreAkiModLoader");
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
