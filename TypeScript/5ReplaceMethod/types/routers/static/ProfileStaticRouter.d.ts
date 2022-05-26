import { ProfileCallbacks } from "../../callbacks/ProfileCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class ProfileStaticRouter extends StaticRouter {
    private profileCallbacks;
    constructor(profileCallbacks: ProfileCallbacks);
}
