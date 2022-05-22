"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    // Perform these actions before server fully loads
    load(container) {
        // get watermarkLocale class from server
        const watermarkLocale = container.resolve("WatermarkLocale");
        // Approach #1
        // Replace the getDescription() function with the one below called 'replacementFunction()'
        watermarkLocale.getDescription = this.replacementFunction;
        // Approach #2
        // Wait until WatermarkLocale gets resolved by the server and run code afterwards to replace 
        // the getDescription() function with the one below called 'replacementFunction()
        container.afterResolution("WatermarkLocale", (_t, result) => {
            result.getDescription = this.replacementFunction;
        }, { frequency: "Always" });
    }
    // not used for this example
    delayedLoad(container) { return; }
    // our new replacement function, ready to be used
    replacementFunction() {
        return ["SPT AKI, WOW VERY COOL"];
    }
}
module.exports = { mod: new Mod() };
