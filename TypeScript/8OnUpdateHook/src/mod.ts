import { DependencyContainer } from "tsyringe";
import type { IMod } from "../types/models/external/mod"
import type { ILogger } from "../types/models/spt/utils/ILogger"
import type { OnUpdateModService } from "../types/services/mod/onUpdate/OnUpdateModService"

class Mod implements IMod
{
    public load(container: DependencyContainer): void
    {
        const logger = container.resolve<ILogger>("WinstonLogger");
        const onUpdateModService = container.resolve<OnUpdateModService>("OnUpdateModService");

        onUpdateModService.registerOnUpdate(
            "MyCustomOnUpdateMod", 
            (timeSinceLastRun: number) => this.customFunctionThatRunsOnLoad(timeSinceLastRun, logger), 
            () => "custom-onupdate-mod" // new route name
        )
    }

    customFunctionThatRunsOnLoad(timeSinceLastRun: number, logger: ILogger): boolean
    {
        if (timeSinceLastRun > 30)
        {
            logger.info("MyCustomMod onupdate custom function is called right now")
            return true; // we did something
        }

        return false; // we didnt do anything
    }

    // Not used in this example
    public delayedLoad(container: DependencyContainer): void
    {
        return;
    }
}
module.exports = {mod: new Mod()}