import { IncomingMessage, ServerResponse } from "node:http";

import { IHttpListener } from "@spt-aki/servers/http/IHttpListener";

export class Type2HttpListener implements IHttpListener
{
    public canHandle(sessionId: string, req: IncomingMessage): boolean
    {
        return req.method === "GET" && req.url?.includes("/type2-custom-url");
    }

    public async handle(sessionId: string, req: IncomingMessage, resp: ServerResponse): Promise<void>
    {
        resp.writeHead(200, "OK");
        resp.end("[2] This is the second example of a mod hooking into the HttpServer");
    }
}
