import { TimeUtil } from "../utils/TimeUtil";
export declare class MatchLocationService {
    private timeUtil;
    private locations;
    constructor(timeUtil: TimeUtil);
    createGroup(sessionID: string, info: any): any;
    deleteGroup(info: any): void;
}
