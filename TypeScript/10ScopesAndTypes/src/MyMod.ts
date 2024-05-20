import { inject, injectable } from "tsyringe";

import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { Processing } from "./Processing";

@injectable()
export class MyMod
{
    // Since this is a singleton this class will only have 1 object/bean
    private calls = 0;

    // All these types are automatically wired when the container resolves the bean creation
    constructor(
        @inject("Processing") private processing: Processing,
        @inject("WinstonLogger") private logger: ILogger,
    )
    {}

    public runModLogic(): void
    {
        this.processing.doProcess();
        this.logger.info(`This is a singleton bean, so everytime its called the same entity will be returned. This is the call number: ${this.calls}`);
        this.calls++;
    }

}
