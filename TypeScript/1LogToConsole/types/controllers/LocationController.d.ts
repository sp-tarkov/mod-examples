import { LocationGenerator } from "../generators/LocationGenerator";
import { ILocationBase } from "../models/eft/common/ILocationBase";
import { ILocationsGenerateAllResponse } from "../models/eft/common/ILocationsSourceDestinationBase";
import { AirDropLootItem } from "../models/spt/location/AirDropLootItem";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class LocationController {
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected logger: ILogger;
    protected locationGenerator: LocationGenerator;
    protected databaseServer: DatabaseServer;
    protected timeUtil: TimeUtil;
    constructor(jsonUtil: JsonUtil, hashUtil: HashUtil, logger: ILogger, locationGenerator: LocationGenerator, databaseServer: DatabaseServer, timeUtil: TimeUtil);
    get(location: string): ILocationBase;
    generate(name: string): ILocationBase;
    generateAll(): ILocationsGenerateAllResponse;
    getAirdropLoot(): AirDropLootItem[];
}
