import { DependencyContainer } from "tsyringe";

import type { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import type { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import type {DynamicRouterModService} from "@spt-aki/services/mod/dynamicRouter/DynamicRouterModService";
import type {StaticRouterModService} from "@spt-aki/services/mod/staticRouter/StaticRouterModService";

class Mod implements IPreAkiLoadMod
{
    public preAkiLoad(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
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

        // Hook up to existing AKI dynamic route
        dynamicRouterModService.registerDynamicRouter(
            "DynamicRoutePeekingAki",
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
            "aki"
        );

        // Hook up to existing AKI static route
        staticRouterModService.registerStaticRouter(
            "StaticRoutePeekingAki",
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
            "aki"
        );
    }
}

export const mod = new Mod();
