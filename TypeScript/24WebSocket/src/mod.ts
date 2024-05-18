import { DependencyContainer } from 'tsyringe';

import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { CustomWebSocketConnectionHandler } from './CustomWebSocketConnectionHandler';
import { IWebSocketConnectionHandler } from '@spt-aki/servers/ws/IWebSocketConnectionHandler';
import { CustomAkiWebSocketMessageHandler } from './CustomAkiWebSocketMessageHandler';
import { IAkiWebSocketMessageHandler } from '@spt-aki/servers/ws/message/IAkiWebSocketMessageHandler';


class Mod implements IPreAkiLoadMod {
    public preAkiLoad(container: DependencyContainer): void {
        // We register our Custom handlers:
        container.register<IWebSocketConnectionHandler>("CustomWebSocketConnectionHandler", CustomWebSocketConnectionHandler);
        container.register<IAkiWebSocketMessageHandler>("CustomAkiWebSocketMessageHandler", CustomAkiWebSocketMessageHandler);
        // Here we are binding MyCoolCommand and AnotherCoolCommand to the MyCommand dependencies types
        container.registerType("WebSocketConnectionHandler", "CustomWebSocketConnectionHandler");
        container.registerType("AkiWebSocketMessageHandler", "CustomAkiWebSocketMessageHandler");
    }
}

module.exports = {
	mod: new Mod()
}
