import { DependencyContainer } from "tsyringe";

import type { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import type { ILogger } from "@spt/models/spt/utils/ILogger";
import type {DynamicRouterModService} from "@spt/services/mod/dynamicRouter/DynamicRouterModService";
import type {StaticRouterModService} from "@spt/services/mod/staticRouter/StaticRouterModService";

class Mod implements IPreSptLoadMod
{
    public preSptLoad(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("PrimaryLogger");
        const dynamicRouterModService = container.resolve<DynamicRouterModService>("DynamicRouterModService");
        const staticRouterModService = container.resolve<StaticRouterModService>("StaticRouterModService");

        // Hook up a new dynamic route
        dynamicRouterModService.registerDynamicRouter(
            "MyDynamicModRouter",
            [
                {
                    url: "/my-dynamic-mod/",
                    action: (url, info, sessionId, output) =>
                    {
                        logger.info("Custom dynamic route hit");
                        return JSON.stringify({response: "OK"});
                    }
                }
            ],
            "custom-dynamic-my-mod"
        );

        // Hook up a new static route
        staticRouterModService.registerStaticRouter(
            "MyStaticModRouter",
            [
                {
                    url: "/my-static-route-mod/",
                    action: (url, info, sessionId, output) =>
                    {
                        logger.info("Custom static route hit");
                        return JSON.stringify({response: "OK"});
                    }
                }
            ],
            "custom-static-my-mod"
        );

        // Hook up to existing SPT dynamic route
        dynamicRouterModService.registerDynamicRouter(
            "DynamicRoutePeekingSpt",
            [
                {
                    url: "/client/menu/locale/",
                    action: (url, info, sessionId, output) =>
                    {
                        logger.info("/client/menu/locale/ data was: " + JSON.stringify(output));
                        return output;
                    }
                }
            ],
            "spt"
        );

        // Hook up to existing SPT static route
        staticRouterModService.registerStaticRouter(
            "StaticRoutePeekingSpt",
            [
                {
                    url: "/launcher/ping",
                    action: (url, info, sessionId, output) =>
                    {
                        logger.info("/launcher/ping data was: " + JSON.stringify(output));
                        return output;
                    }
                }
            ],
            "spt"
        );
    }
}

export const mod = new Mod();
