import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ImporterUtil } from "@spt-aki/utils/ImporterUtil";
import { DependencyContainer } from "tsyringe";
import { ConfigsModelBase } from "./model/ConfigsModel";

class Mod implements IPreAkiLoadMod {
	public preAkiLoad(container: DependencyContainer): void {
		// get logger
		const logger = container.resolve<ILogger>("WinstonLogger");

		const importerUtil = container.resolve<ImporterUtil>("ImporterUtil");
		const modImporter = container.resolve<PreAkiModLoader>("PreAkiModLoader");
		const path = modImporter.getModPath("16ImporterUtil");

		const configPath = `${path}config/`;
		const configs = importerUtil.loadRecursive<ConfigsModelBase>(configPath);
		logger.info(
			`16ImporterUtil Configurations found: ${JSON.stringify(configs)}`,
		);
	}
}

export const mod = new Mod();
