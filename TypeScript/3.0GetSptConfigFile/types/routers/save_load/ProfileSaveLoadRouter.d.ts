import { IAkiProfile } from "../../@types/eft/profile/IAkiProfile";
import { HandledRoute, SaveLoadRouter } from "../../di/Router";
export declare class ProfileSaveLoadRouter extends SaveLoadRouter {
    constructor();
    getHandledRoutes(): HandledRoute[];
    handleLoad(profile: IAkiProfile): IAkiProfile;
}
