import { IHttpListener } from "@spt-aki/servers/http/IHttpListener";
import { IncomingMessage, ServerResponse } from "http";

export class Type2HttpListener implements IHttpListener
{
    public canHandle(sessionId: string, req: IncomingMessage): boolean 
    {
        return req.method === "GET" && req.url?.includes("/type2-custom-url");
    }
    public handle(sessionId: string, req: IncomingMessage, resp: ServerResponse): void 
    {
        resp.writeHead(200, "OK");
        resp.end("[2] This is the second example of a mod hooking into the HttpServer");
    }
}
