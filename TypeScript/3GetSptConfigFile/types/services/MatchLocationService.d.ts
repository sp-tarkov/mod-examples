import { TimeUtil } from "../utils/TimeUtil";
export declare class MatchLocationService {
    protected timeUtil: TimeUtil;
    protected locations: {};
    constructor(timeUtil: TimeUtil);
    createGroup(sessionID: string, info: any): any;
    deleteGroup(info: any): void;
}
