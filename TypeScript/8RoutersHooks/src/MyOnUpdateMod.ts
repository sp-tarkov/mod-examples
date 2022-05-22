import { ILogger } from "@spt-types/models/spt/utils/ILogger";
import { OnUpdate } from "@spt-types/di/OnUpdate";
import { inject, injectable } from "tsyringe";

@injectable()
export class MyOnUpdateMod extends OnUpdate
{
    constructor(
        @inject("WinstonLogger") private logger: ILogger) 
    {
        super();
    }

    public override onUpdate(timeSinceLastRun: number): boolean 
    {
        this.logger.info("My mod MyOnUpdateMod.onUpdate was triggered");
        return true;
    }

    public override getRoute(): string 
    {
        return "my-mod";
    }
}