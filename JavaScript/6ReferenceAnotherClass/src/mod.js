const MoreCode = require("./MoreCode");

class Mod
{
    // not used for this example
    load(container)
    { return }

    delayedLoad(container)
    {
        // get logger
        const logger = container.resolve("WinstonLogger");

        // Make a new instance of the 'MoreCode' class
        const moreCode = new MoreCode();

        // call the function 'getTheWordFlub()' and assign the result to 'result'
        const result = moreCode.getTheWordFlub();

        // log the 'myProperty' property to the console
        logger.info(`Here is the value from my second class: ${result}`);
    }
}

module.exports = { mod: new Mod() }