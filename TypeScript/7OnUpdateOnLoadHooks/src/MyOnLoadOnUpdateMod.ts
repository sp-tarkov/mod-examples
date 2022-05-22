import { ILogger } from "../types/models/spt/utils/ILogger";
import { inject, injectable } from "tsyringe";

@injectable()
export class MyOnLoadOnUpdateMod
{
    constructor(
        @inject("WinstonLogger") private logger: ILogger) 
    {
    }

    public onLoad(): void 
    {
        this.logger.info("My mod MyOnLoadOnUpdateMod.onLoad was triggered");
    }

    public onUpdate(timeSinceLastRun: number): boolean 
    {
        this.logger.info("My mod MyOnLoadOnUpdateMod.onUpdate was triggered");
        return true;
    }

    public getRoute(): string 
    {
        return "my-mod";
    }
}