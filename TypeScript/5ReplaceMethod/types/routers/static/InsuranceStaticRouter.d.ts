import { InsuranceCallbacks } from "../../callbacks/InsuranceCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class InsuranceStaticRouter extends StaticRouter 
{
    private insuranceCallbacks;
    constructor(insuranceCallbacks: InsuranceCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
