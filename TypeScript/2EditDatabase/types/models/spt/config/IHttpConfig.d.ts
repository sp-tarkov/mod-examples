import { IBaseConfig } from "./IBaseConfig";
export interface IHttpConfig extends IBaseConfig {
    kind: "aki-http";
    ip: string;
    port: number;
}
