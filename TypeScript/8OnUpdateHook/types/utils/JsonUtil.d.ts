import { ILogger } from "../models/spt/utils/ILogger";
import { HashUtil } from "./HashUtil";
import { VFS } from "./VFS";
export declare class JsonUtil {
    private vfs;
    private hashUtil;
    private logger;
    private fileHashes;
    constructor(vfs: VFS, hashUtil: HashUtil, logger: ILogger);
    /**
     * From object to string
     * @param data object to turn into JSON
     * @param prettify Should output be prettified?
     * @returns string
     */
    serialize(data: any, prettify?: boolean): string;
    /**
     * From string to object
     * @param jsonString json string to turn into object
     * @returns object
     */
    deserialize(jsonString: string): any;
    deserializeWithCacheCheck(jsonString: string, filePath: string): string;
    clone<T>(data: T): T;
}
