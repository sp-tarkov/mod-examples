import { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks";
import { DynamicRouter } from "../../di/Router";
export declare class CustomizationDynamicRouter extends DynamicRouter {
    private customizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
}
