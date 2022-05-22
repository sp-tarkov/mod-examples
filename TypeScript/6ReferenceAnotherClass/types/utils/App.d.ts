import { TimeUtil } from "./TimeUtil";
import { OnLoad } from "../di/OnLoad";
import { OnUpdate } from "../di/OnUpdate";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class App {
    private logger;
    private timeUtil;
    private onLoadComponents;
    private onUpdateComponents;
    private onUpdateLastRun;
    constructor(logger: ILogger, timeUtil: TimeUtil, onLoadComponents: OnLoad[], onUpdateComponents: OnUpdate[]);
    load(): void;
    private update;
}
