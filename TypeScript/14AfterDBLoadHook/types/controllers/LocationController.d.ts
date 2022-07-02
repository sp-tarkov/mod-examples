import { LocationGenerator } from "../generators/LocationGenerator";
import { ILocationBase } from "../models/eft/common/ILocationBase";
import { ILocationsGenerateAllResponse } from "../models/eft/common/ILocationsSourceDestinationBase";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class LocationController {
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    protected locationGenerator: LocationGenerator;
    protected databaseServer: DatabaseServer;
    protected timeUtil: TimeUtil;
    constructor(jsonUtil: JsonUtil, logger: ILogger, locationGenerator: LocationGenerator, databaseServer: DatabaseServer, timeUtil: TimeUtil);
    get(location: string): ILocationBase;
    generate(name: string): ILocationBase;
    generateAll(): ILocationsGenerateAllResponse;
}
