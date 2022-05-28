import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod"
import { ILogger } from "@spt-aki/models/spt/utils/ILogger"
import { OnLoadModService } from "@spt-aki/services/mod/onLoad/OnLoadModService"

class Mod implements IMod
{
    public load(container: DependencyContainer): void
    {
        const logger = container.resolve<ILogger>("WinstonLogger");
        const onLoadModService = container.resolve<OnLoadModService>("OnLoadModService");
        onLoadModService.registerOnLoad(
            "MyCustomMod", // route key
            () => this.customFunctionThatRunsOnLoad(logger), 
            () => "custom-mod" // new route name
        )
    }

    customFunctionThatRunsOnLoad(logger: ILogger): void
    {
        logger.info("MyCustomMod custom function is loading right now")
    }

    // Not used in this example
    public delayedLoad(container: DependencyContainer): void
    {
        return;
    }
}
module.exports = {mod: new Mod()}