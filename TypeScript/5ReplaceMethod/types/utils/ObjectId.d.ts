/// <reference types="node" />
import { TimeUtil } from "./TimeUtil";
export declare class ObjectId {
    private timeUtil;
    constructor(timeUtil: TimeUtil);
    private randomBytes;
    private constglobalCounter;
    private consttime;
    private globalCounter;
    private time;
    incGlobalCounter(): number;
    toHexString(byteArray: string | any[] | Buffer): string;
    generate(): string;
}
