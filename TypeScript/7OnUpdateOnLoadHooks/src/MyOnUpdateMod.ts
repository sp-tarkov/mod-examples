import { ILogger } from "../types/models/spt/utils/ILogger";
import { inject, injectable } from "tsyringe";

@injectable()
export class MyOnUpdateMod
{
    constructor(
        @inject("WinstonLogger") private logger: ILogger) 
    {
    }

    public onUpdate(timeSinceLastRun: number): boolean 
    {
        this.logger.info("My mod MyOnUpdateMod.onUpdate was triggered");
        return true;
    }

    public getRoute(): string 
    {
        return "my-mod";
    }
}