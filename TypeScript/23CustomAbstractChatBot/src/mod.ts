import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DialogueController } from "@spt-aki/controllers/DialogueController";
import { CustomSimpleChatBot } from "./CustomSimpleChatBot";
import { MyCoolCommand } from "./MyCoolCommand";
import { AnotherCoolCommand } from "./AnotherCoolCommand";

class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void {
        // We register our commands so they get resolved by our chat bot:
        container.register<MyCoolCommand>("MyCoolCommand", MyCoolCommand);
        container.register<AnotherCoolCommand>("AnotherCoolCommand", AnotherCoolCommand);
        // Here we are binding MyCoolCommand and AnotherCoolCommand to the MyCommand dependencies types
        container.registerType("MyCommand", "MyCoolCommand");
        container.registerType("MyCommand", "AnotherCoolCommand");
        // Since the two commands above have been bind to "MyCommand" they will get injected automatically into the constructor
        // We register and re-resolve the dependency so the container takes care of filling in the command dependencies
        container.register<CustomSimpleChatBot>("CustomSimpleChatBot", CustomSimpleChatBot);
        container.resolve<DialogueController>("DialogueController").registerChatBot(container.resolve<CustomSimpleChatBot>("CustomSimpleChatBot"));
    }
}

export const mod = new Mod();
