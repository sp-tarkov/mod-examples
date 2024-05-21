import { IncomingMessage, ServerResponse } from "node:http";
import { DependencyContainer } from "tsyringe";

import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { HttpListenerModService } from "@spt/services/mod/httpListener/HttpListenerModService";
import { Type2HttpListener } from "./Type2HttpListener";

class Mod implements IPreSptLoadMod
{
    // Code added here will load BEFORE the server has started loading
    public preSptLoad(container: DependencyContainer): void
    {
        const httpListenerService = container.resolve<HttpListenerModService>("HttpListenerModService");
        httpListenerService.registerHttpListener("Type1HttpListener", this.canHandleOverride, this.handleOverride)

        container.register<Type2HttpListener>("Type2HttpListener", Type2HttpListener);
        container.registerType("HttpListener", "Type2HttpListener");
    }

    public canHandleOverride(sessionId: string, req: IncomingMessage): boolean
    {
        return req.method === "GET" && req.url?.includes("/type1-custom-url");
    }

    public handleOverride(sessionId: string, req: IncomingMessage, resp: ServerResponse): void
    {
        resp.writeHead(200, "OK");
        resp.end("[1] This is the first example of a mod hooking into the HttpServer");
    }
}

export const mod = new Mod();
