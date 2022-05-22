import { ILogger } from "@spt-types/models/spt/utils/ILogger";
import { OnLoad } from "@spt-types/di/OnLoad";
import { inject, injectable } from "tsyringe";

@injectable()
export class MyOnLoadMod extends OnLoad
{
    constructor(
        @inject("WinstonLogger") private logger: ILogger) 
    {
        super();
    }

    public override onLoad(): void 
    {
        this.logger.info("My mod MyOnLoadMod.onLoad was triggered");
    }

    public override getRoute(): string 
    {
        return "my-mod";
    }
}