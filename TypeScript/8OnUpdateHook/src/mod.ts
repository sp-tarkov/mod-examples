import { DependencyContainer } from "tsyringe";

import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { OnUpdateModService } from "@spt-aki/services/mod/onUpdate/OnUpdateModService";

class Mod implements IPreAkiLoadMod
{
    public preAkiLoad(container: DependencyContainer): void {
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
