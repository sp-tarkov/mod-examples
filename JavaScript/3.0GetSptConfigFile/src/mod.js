class Mod
{
    // not used for this example
    load(container)
    { return }

    delayedLoad(container)
    {
        // get logger
        const logger = container.resolve("WinstonLogger");

        // get the config server
        const configServer = container.resolve("ConfigServer");

        // Request bot config
        // Required - ConfigTypes.BOT is the enum of the config we want, others include ConfigTypes.Airdrop
        const botConfig = configServer.getConfig("aki-bot");

        // log the original pmc difficulty
        logger.info(`here is the original bot pmc difficulty: ${botConfig.pmc.difficulty}`)

        // adjust the difficulty
        botConfig.pmc.difficulty = "easy";

        // log the new pmc difficulty
        logger.info(`here is the altered bot pmc difficulty: ${botConfig.pmc.difficulty}`)
    }
}

module.exports = { mod: new Mod() }