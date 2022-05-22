import type { DependencyContainer } from "tsyringe";

import { IMod } from "../types/models/external/mod";
import type { WatermarkLocale } from "../types/utils/Watermark";

class Mod implements IMod
{
    // Perform these actions before server fully loads
    public load(container: DependencyContainer): void
    {
        // get watermarkLocale class from server
        const watermarkLocale = container.resolve<WatermarkLocale>("WatermarkLocale");

        // Approach #1
        // Replace the getDescription() function with the one below called 'replacementFunction()'
        watermarkLocale.getDescription = this.replacementFunction;

        // Approach #2
        // Wait until WatermarkLocale gets resolved by the server and run code afterwards to replace 
        // the getDescription() function with the one below called 'replacementFunction()
        container.afterResolution("WatermarkLocale", (_t, result: WatermarkLocale) => 
        {
            result.getDescription = this.replacementFunction;
        }, {frequency: "Always"});
    }

    // not used for this example
    public delayedLoad(container: DependencyContainer): void
    { return }

    // our new replacement function, ready to be used
    public replacementFunction(): string[]
    {
        return ["SPT AKI, WOW VERY COOL"];
    }
}

module.exports = { mod: new Mod() }