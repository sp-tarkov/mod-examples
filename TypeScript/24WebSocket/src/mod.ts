import { DependencyContainer } from "tsyringe";

import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { CustomWebSocketConnectionHandler } from "./CustomWebSocketConnectionHandler";
import { IWebSocketConnectionHandler } from "@spt/servers/ws/IWebSocketConnectionHandler";
import { CustomSptWebSocketMessageHandler } from "./CustomSptWebSocketMessageHandler";
import { ISptWebSocketMessageHandler } from "@spt/servers/ws/message/ISptWebSocketMessageHandler";

class Mod implements IPreSptLoadMod {
    public preSptLoad(container: DependencyContainer): void {
        // We register our Custom handlers:
        container.register<IWebSocketConnectionHandler>("CustomWebSocketConnectionHandler", CustomWebSocketConnectionHandler);
        container.register<ISptWebSocketMessageHandler>("CustomSptWebSocketMessageHandler", CustomSptWebSocketMessageHandler);
        // Here we are binding MyCoolCommand and AnotherCoolCommand to the MyCommand dependencies types
        container.registerType("WebSocketConnectionHandler", "CustomWebSocketConnectionHandler");
        container.registerType("SptWebSocketMessageHandler", "CustomSptWebSocketMessageHandler");
    }
}

export const mod = new Mod();
