import { ProfileCallbacks } from "../../callbacks/ProfileCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class ProfileStaticRouter extends StaticRouter 
{
    private profileCallbacks;
    constructor(profileCallbacks: ProfileCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
