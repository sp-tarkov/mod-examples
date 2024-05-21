import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { SptCommandoCommands } from "@spt/helpers/Dialogue/Commando/SptCommandoCommands";
import { CustomSptCommand } from "./CustomSptCommand";

class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void {
        // We register and re-resolve the dependency so the container takes care of filling in the command dependencies
        container.register<CustomSptCommand>("CustomSptCommand", CustomSptCommand);
        container.resolve<SptCommandoCommands>("SptCommandoCommands").registerSptCommandoCommand(container.resolve<CustomSptCommand>("CustomSptCommand"));
    }
}

export const mod = new Mod();
