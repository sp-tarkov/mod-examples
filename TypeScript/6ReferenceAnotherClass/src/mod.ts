import { DependencyContainer } from "tsyringe";

import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { MoreCode } from "./MoreCode";

class Mod implements IPostAkiLoadMod
{
    public postAkiLoad(container: DependencyContainer): void 
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
