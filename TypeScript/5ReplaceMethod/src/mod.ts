import type { DependencyContainer } from "tsyringe";

import { IMod } from "../types/@types/external/mod";
import type { WatermarkLocale } from "../types/utils/Watermark";

class Mod implements IMod
{
    // Perform these actions before server fully loads
    public load(container: DependencyContainer): void
    { 
        // get watermarkLocale class from server
        const watermarkLocale = container.resolve<WatermarkLocale>("WatermarkLocale");

        // Replace the getDescription() function with the one below called 'replacementFunction()'
        watermarkLocale.getDescription = this.replacementFunction;
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