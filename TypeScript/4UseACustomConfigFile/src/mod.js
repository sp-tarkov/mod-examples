"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    constructor() {
        this.modConfig = require("../config/config.json");
    }
    // not used for this example
    load(container) { return; }
    delayedLoad(container) {
        // get logger
        const logger = container.resolve("WinstonLogger");
        // log the 'myProperty' value to the console
        logger.info(`here is the value from my config: ${this.modConfig.myProperty}`);
    }
}
module.exports = { mod: new Mod() };
