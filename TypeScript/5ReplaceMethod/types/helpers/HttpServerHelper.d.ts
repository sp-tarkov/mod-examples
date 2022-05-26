import { ConfigServer } from "../servers/ConfigServer";
export declare class HttpServerHelper {
    private configServer;
    private httpConfig;
    private mime;
    constructor(configServer: ConfigServer);
    getMimeText(key: string): string;
    buildUrl(): string;
    getBackendUrl(): string;
    getWebsocketUrl(): string;
    sendTextJson(resp: any, output: any): void;
}
