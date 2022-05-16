class Mod
{
    // Perform these actions before server fully loads
    load(container)
    {
        // get watermarkLocale class from server
        const watermarkLocale = container.resolve("WatermarkLocale");

        // Replace the getDescription() function with the one below called 'replacementFunction()'
        watermarkLocale.getDescription = this.replacementFunction;
    }

    // not used for this example
    delayedLoad(container)
    { return }

    // our new replacement function, ready to be used
    replacementFunction()
    {
        return ["SPT AKI, WOW VERY COOL"];
    }
}

module.exports = { mod: new Mod() }