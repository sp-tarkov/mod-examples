import { ILogger } from "@spt-types/models/spt/utils/ILogger";
import { OnLoadOnUpdate } from "@spt-types/di/OnLoadOnUpdate";
import { inject, injectable } from "tsyringe";

@injectable()
export class MyOnLoadOnUpdateMod extends OnLoadOnUpdate
{
    constructor(
        @inject("WinstonLogger") private logger: ILogger) 
    {
        super();
    }

    public override onLoad(): void 
    {
        this.logger.info("My mod MyOnLoadOnUpdateMod.onLoad was triggered");
    }

    public override onUpdate(timeSinceLastRun: number): boolean 
    {
        this.logger.info("My mod MyOnLoadOnUpdateMod.onUpdate was triggered");
        return true;
    }

    public override getRoute(): string 
    {
        return "my-mod";
    }
}