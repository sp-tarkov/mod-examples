import { ILogger } from "../types/models/spt/utils/ILogger";
import { inject, injectable } from "tsyringe";

@injectable()
export class MyOnLoadMod
{
    constructor(
        @inject("WinstonLogger") private logger: ILogger) 
    {
    }

    public onLoad(): void 
    {
        this.logger.info("My mod MyOnLoadMod.onLoad was triggered");
    }

    public getRoute(): string 
    {
        return "my-mod";
    }
}