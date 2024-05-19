import { DependencyContainer } from 'tsyringe';

import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { VFS } from "@spt-aki/utils/VFS";
import { jsonc } from 'jsonc';

// Our dynamically imported package (via pnpm) not bundled into the server
import ora from "ora-classic";
import path from "path";

class Mod implements IPreAkiLoadMod, IPostAkiLoadMod {
	public preAkiLoad(container: DependencyContainer): void {
		const VFS = container.resolve<VFS>("VFS");
		const logger = container.resolve<ILogger>("WinstonLogger");

		const parsedJsonC = jsonc.parse(VFS.readFile(path.resolve(__dirname, "../test.jsonc")));

		logger.success(jsonc.stringify(parsedJsonC, null, "\t")); // you could use the built in JSON api here if you really wanted too aswell, i used jsonc to really drive home the point that it works
	}

	public postAkiLoad(container: DependencyContainer): void {
		// this first timeout is just to prevent a weird formatting problem on the console, you can ignore it, you don't really need it anyways, it's just so that it looks right on the console
		setTimeout(() => {
			const spinner = ora({
				text: "Hacking into the mainframe...",
				spinner: "line",
				hideCursor: false,
				discardStdin: false
			}).start();

			// this second timeout is to simulate the time it takes to hack into the mainframe, as it turns out, not a lot!
			setTimeout(() => {
				spinner.succeed("Successfully hacked into the mainframe!");
			}, 3000);
		}, 1000);
	}
}

export const mod = new Mod();
