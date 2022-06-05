import { IAkiProfile, Info } from "../models/eft/profile/IAkiProfile";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { VFS } from "../utils/VFS";
import { SaveLoadRouter } from "../di/Router";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class SaveServer {
    private vfs;
    private saveLoadRouters;
    private jsonUtil;
    private hashUtil;
    private logger;
    private profileFilepath;
    private profiles;
    private onSave;
    private saveMd5;
    constructor(vfs: VFS, saveLoadRouters: SaveLoadRouter[], jsonUtil: JsonUtil, hashUtil: HashUtil, logger: ILogger);
    load(): void;
    save(): void;
    getProfile(sessionId: string): IAkiProfile;
    getProfiles(): Record<string, IAkiProfile>;
    deleteProfileById(sessionID: string): boolean;
    createProfile(profileInfo: Info): void;
    addProfile(profileDetails: IAkiProfile): void;
    loadProfile(sessionID: string): void;
    saveProfile(sessionID: string): void;
    removeProfile(sessionID: string): boolean;
}
