import { DependencyContainer } from "tsyringe";

// SPT types
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ImageRouter } from "@spt/routers/ImageRouter";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { ITraderConfig } from "@spt/models/spt/config/ITraderConfig";
import { IRagfairConfig } from "@spt/models/spt/config/IRagfairConfig";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { Traders } from "@spt/models/enums/Traders";

// New trader settings
import baseJson = require("../db/base.json");
import assortJson = require("../db/assort.json");

import { TraderHelper } from "./traderHelpers";

class SampleTrader implements IPreSptLoadMod, IPostDBLoadMod
{
    private mod: string;
    private traderImgPath: string;
    private logger: ILogger;
    private traderHelper: TraderHelper;

    constructor() {
        this.mod = "131AddTraderWithAssortJSON"; // Set name of mod so we can log it to console later - match this to your folder name that's built for \user\mods\
        this.traderImgPath = "res/cat.jpg"; // Set path to trader image
    }

    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    public preSptLoad(container: DependencyContainer): void
    {
        // Get a logger
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.logger.debug(`[${this.mod}] preSpt Loading... `);

        // Get SPT code/data we need later
        const preSptModLoader: PreSptModLoader = container.resolve<PreSptModLoader>("PreSptModLoader");
        const imageRouter: ImageRouter = container.resolve<ImageRouter>("ImageRouter");
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig: ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig<IRagfairConfig>(ConfigTypes.RAGFAIR);

        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.traderHelper = new TraderHelper();
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${preSptModLoader.getModPath(this.mod)}${this.traderImgPath}`);
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, 3600, 4000);

        // Add trader to trader enum
        Traders[baseJson._id] = baseJson._id;

        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;

        this.logger.debug(`[${this.mod}] preSpt Loaded`);
    }

    /**
     * Majority of trader-related work occurs after the spt database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    public postDBLoad(container: DependencyContainer): void
    {
        this.logger.debug(`[${this.mod}] postDb Loading... `);

        // Resolve SPT classes we'll use
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const jsonUtil: JsonUtil = container.resolve<JsonUtil>("JsonUtil");

        // Get a reference to the database tables
        const tables = databaseServer.getTables();

        // Add new trader to the trader dictionary in DatabaseServer - this is where the assort json is loaded
        /*
        * The assortJSON includes the following:
        * Milk available for roubles at LL1
        * Milk available for item barter at LL1
        * Helmet w/ soft armour available for roubles at LL1
        * Helmet w/ soft armour available for item barter at LL1
        * 
        * Your assort MUST use mongoID for _ids
        * You can use friendly names for _name
        */
        this.traderHelper.addTraderToDb(baseJson, tables, jsonUtil, assortJson);
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, "Cat", baseJson.nickname, baseJson.location, "This is the cat shop");
        
        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }
}

export const mod = new SampleTrader();
