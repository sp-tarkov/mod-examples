"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    // Code added here will load BEFORE the server has started loading
    load(container) {
        // get the logger from the server container
        const logger = container.resolve("WinstonLogger");
        logger.info("I am logging info!");
        logger.warning("I am logging a warning!");
        logger.error("I am logging an error!");
    }
    // Code added here will be run AFTER the server has started
    delayedLoad(container) { return; }
}
module.exports = { mod: new Mod() };
