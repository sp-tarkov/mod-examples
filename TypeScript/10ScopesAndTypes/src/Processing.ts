import { inject, injectable } from "tsyringe";
import { ILogger } from "../types/models/spt/utils/ILogger";

@injectable()
export class Processing 
{
    // Since this is a transient type, this class will have many of this type
    // Anything left in variables will always be discarded
    private calls = 0;

    constructor(
        @inject("WinstonLogger") private logger: ILogger
    )
    {}

    public doProcess(): void 
    {
        this.logger.info(`Process was triggered, since this is a singleton the calls value is always 0: ${this.calls}`);
    }

}