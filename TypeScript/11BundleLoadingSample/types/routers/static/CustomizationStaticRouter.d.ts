import { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class CustomizationStaticRouter extends StaticRouter {
    private customizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
}
