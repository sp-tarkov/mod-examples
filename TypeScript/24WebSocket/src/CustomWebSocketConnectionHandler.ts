import { IncomingMessage } from "node:http";
import { inject, injectable } from "tsyringe";
import { WebSocket } from "ws";

import { ILogger } from "@spt/models/spt/utils/ILogger";
import { IWebSocketConnectionHandler } from "@spt/servers/ws/IWebSocketConnectionHandler";

//    \/   dont forger this annotation here!
@injectable()
export class CustomWebSocketConnectionHandler implements IWebSocketConnectionHandler
{
    constructor(
        @inject("WinstonLogger") protected logger: ILogger,
    )
    {}

    public getSocketId(): string
    {
        return "My Custom WebSocket";
    }

    public getHookUrl(): string
    {
        return "/custom/socket/";
    }

    public onConnection(ws: WebSocket, req: IncomingMessage): void
    {
        this.logger.info("Custom web socket is now connected!");
        ws.on("message", (msg) =>
        {
            if (msg.toString() === "toodaloo")
            {
                ws.send("toodaloo back!");
            }
        });
    }
}
