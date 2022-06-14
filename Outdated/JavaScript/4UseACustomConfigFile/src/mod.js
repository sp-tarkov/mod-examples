const modConfig = require("../config/config.json");

class Mod
{
    // not used for this example
    load(container)
    { return }

    delayedLoad(container)
    {
        // get logger
        const logger = container.resolve("WinstonLogger");

        // log the 'myProperty' value to the console
        logger.info(`here is the value from my config: ${modConfig.myProperty}`);
    }
}

module.exports = { mod: new Mod() }