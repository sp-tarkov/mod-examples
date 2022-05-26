import { Daum } from "../../eft/itemEvent/IItemEventRouterRequest";
export interface ILogger {
    writeToLogFile(data: string | Daum): void;
    log(data: string | Record<string, unknown> | Error, color: string): void;
    error(data: string): void;
    warning(data: string): void;
    success(data: string): void;
    info(data: string): void;
    debug(data: string | Record<string, unknown>, onlyShowInConsole?: boolean): void;
}
