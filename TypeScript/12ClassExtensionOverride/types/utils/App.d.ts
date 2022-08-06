import { TimeUtil } from "./TimeUtil";
import { OnLoad } from "../di/OnLoad";
import { OnUpdate } from "../di/OnUpdate";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class App {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected onLoadComponents: OnLoad[];
    protected onUpdateComponents: OnUpdate[];
    protected onUpdateLastRun: {};
    constructor(logger: ILogger, timeUtil: TimeUtil, onLoadComponents: OnLoad[], onUpdateComponents: OnUpdate[]);
    load(): void;
    protected update(onUpdateComponents: OnUpdate[]): void;
    protected logUpdateException(err: any, updateable: OnUpdate): void;
}
