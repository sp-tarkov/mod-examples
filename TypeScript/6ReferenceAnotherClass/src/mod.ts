import type { DependencyContainer } from "tsyringe";

import { IMod } from "../types/@types/external/mod";
import type { ILogger } from "../types/@types/spt/utils/ILogger";
import {MoreCode } from "./MoreCode";

class Mod implements IMod
{
    // not used for this example
    public load(container: DependencyContainer): void
    { return }

    public delayedLoad(container: DependencyContainer): void
    { 
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        // Make a new instance of the 'MoreCode' class
        const moreCode = new MoreCode();

        // call the function 'getTheWordFlub()' and assign the result to 'result'
        const result = moreCode.getTheWordFlub();

        // log the 'myProperty' property to the console
        logger.info(`Here is the value from my second class: ${result}`);
    }
}

module.exports = { mod: new Mod() }