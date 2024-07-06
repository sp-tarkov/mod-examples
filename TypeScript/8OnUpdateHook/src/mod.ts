import { DependencyContainer } from "tsyringe";

import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { OnUpdateModService } from "@spt/services/mod/onUpdate/OnUpdateModService";

class Mod implements IPreSptLoadMod
{
    public preSptLoad(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
        const onUpdateModService = container.resolve<OnUpdateModService>("OnUpdateModService");

        onUpdateModService.registerOnUpdate(
            "MyCustomOnUpdateMod",
            (timeSinceLastRun: number) => this.customFunctionThatRunsOnLoad(timeSinceLastRun, logger),
            () => "custom-onupdate-mod" // new route name
        );
    }

    public customFunctionThatRunsOnLoad(timeSinceLastRun: number, logger: ILogger): boolean
    {
        if (timeSinceLastRun > 30)
        {
            logger.info("MyCustomMod onupdate custom function is called right now");
            return true; // we did something
        }

        return false; // we didnt do anything
    }
}

export const mod = new Mod();
