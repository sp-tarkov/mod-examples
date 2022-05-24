import { DatabaseServer } from "../servers/DatabaseServer";
import { LocationGenerator } from "../generators/LocationGenerator";
import { ILocationBase } from "../models/eft/common/ILocationBase";
import { ILocationsGenerateAllResponse } from "../models/eft/common/ILocationsSourceDestinationBase";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class LocationController {
    private jsonUtil;
    private logger;
    private locationGenerator;
    private databaseServer;
    private timeUtil;
    constructor(jsonUtil: JsonUtil, logger: ILogger, locationGenerator: LocationGenerator, databaseServer: DatabaseServer, timeUtil: TimeUtil);
    get(location: string): ILocationBase;
    generate(name: string): ILocationBase;
    generateAll(): ILocationsGenerateAllResponse;
}
