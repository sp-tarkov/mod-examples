import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { CommandoDialogueChatBot } from "@spt/helpers/Dialogue/CommandoDialogueChatBot";
import { CustomCommandoCommand } from "./CustomCommandoCommand";

class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void {
        // We register and re-resolve the dependency so the container takes care of filling in the command dependencies
        container.register<CustomCommandoCommand>("CustomCommandoCommand", CustomCommandoCommand);
        container.resolve<CommandoDialogueChatBot>("CommandoDialogueChatBot").registerCommandoCommand(container.resolve<CustomCommandoCommand>("CustomCommandoCommand"));
    }
}

export const mod = new Mod();
