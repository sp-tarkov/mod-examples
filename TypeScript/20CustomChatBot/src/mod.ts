import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DialogueController } from "@spt/controllers/DialogueController";
import { CustomChatBot } from "./CustomChatBot";

class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void {
        // We register and re-resolve the dependency so the container takes care of filling in the command dependencies
        container.register<CustomChatBot>("CustomChatBot", CustomChatBot);
        container.resolve<DialogueController>("DialogueController").registerChatBot(container.resolve<CustomChatBot>("CustomChatBot"));
    }
}

export const mod = new Mod();
