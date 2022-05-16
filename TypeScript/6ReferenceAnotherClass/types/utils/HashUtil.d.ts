/// <reference types="node" />
import crypto from "crypto";
import { TimeUtil } from "./TimeUtil";
export declare class HashUtil {
    private timeUtil;
    constructor(timeUtil: TimeUtil);
    generate(): string;
    generateMd5ForData(data: string): string;
    generateSha1ForData(data: string): string;
    generateHashForData(algorithm: string, data: crypto.BinaryLike): string;
}
