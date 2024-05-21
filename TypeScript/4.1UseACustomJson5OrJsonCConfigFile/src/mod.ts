import path from "node:path";
import { DependencyContainer } from "tsyringe";

import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { VFS } from "@spt-aki/utils/VFS";

import JSON5 from "json5";
import { jsonc } from "jsonc";

class Mod implements IPostAkiLoadMod
{
    public postAkiLoad(container: DependencyContainer): void {
        // get logger
        const logger = container.resolve<ILogger>("WinstonLogger");

        // Get VFS to read in configs
        const vfs = container.resolve<VFS>("VFS");

        // Read in the json 5 config content and parse it into json
        const modConfigJson5 = JSON5.parse(vfs.readFile(path.resolve(__dirname, "../config/config.json5")));

        // Read in the json c config content and parse it into json
        const modConfigJsonC = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc")));

        // log the 'myProperty' values to the console
        logger.success(`here is the value from my json5 config: ${modConfigJson5.myProperty}`);
        logger.success(`here is the value from my jsonc config: ${modConfigJsonC.myProperty}`);
    }
}

export const mod = new Mod();
