import { DependencyContainer } from "tsyringe";

import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { CustomWebSocketConnectionHandler } from "./CustomWebSocketConnectionHandler";
import { IWebSocketConnectionHandler } from "@spt/servers/ws/IWebSocketConnectionHandler";
import { CustomAkiWebSocketMessageHandler } from "./CustomAkiWebSocketMessageHandler";
import { IAkiWebSocketMessageHandler } from "@spt/servers/ws/message/IAkiWebSocketMessageHandler";

class Mod implements IPreSptLoadMod {
    public preSptLoad(container: DependencyContainer): void {
        // We register our Custom handlers:
        container.register<IWebSocketConnectionHandler>("CustomWebSocketConnectionHandler", CustomWebSocketConnectionHandler);
        container.register<IAkiWebSocketMessageHandler>("CustomAkiWebSocketMessageHandler", CustomAkiWebSocketMessageHandler);
        // Here we are binding MyCoolCommand and AnotherCoolCommand to the MyCommand dependencies types
        container.registerType("WebSocketConnectionHandler", "CustomWebSocketConnectionHandler");
        container.registerType("AkiWebSocketMessageHandler", "CustomAkiWebSocketMessageHandler");
    }
}

export const mod = new Mod();
