import { DependencyContainer } from "tsyringe";

import { IPreAkiLoadMod } from "@spt/models/external/IPreAkiLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { OnLoadModService } from "@spt/services/mod/onLoad/OnLoadModService";

class Mod implements IPreAkiLoadMod
{
    public preAkiLoad(container: DependencyContainer): void
    {
        const logger = container.resolve<ILogger>("WinstonLogger");
        const onLoadModService = container.resolve<OnLoadModService>("OnLoadModService");
        onLoadModService.registerOnLoad(
            "MyCustomMod", // route key
            () => this.customFunctionThatRunsOnLoad(logger),
            () => "custom-mod" // new route name
        );
    }

    public customFunctionThatRunsOnLoad(logger: ILogger): void
    {
        logger.info("MyCustomMod custom function is loading right now");
    }
}

export const mod = new Mod();
