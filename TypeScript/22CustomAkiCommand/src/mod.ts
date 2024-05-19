import { DependencyContainer } from 'tsyringe';

import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { SptCommandoCommands } from "@spt-aki/helpers/Dialogue/Commando/SptCommandoCommands";
import { CustomAkiCommand } from './CustomAkiCommand';

class Mod implements IPostDBLoadMod {
	public postDBLoad(container: DependencyContainer): void {
        // We register and re-resolve the dependency so the container takes care of filling in the command dependencies
        container.register<CustomAkiCommand>("CustomAkiCommand", CustomAkiCommand);
        container.resolve<SptCommandoCommands>("SptCommandoCommands").registerSptCommandoCommand(container.resolve<CustomAkiCommand>("CustomAkiCommand"))
	}

}

export const mod = new Mod();
