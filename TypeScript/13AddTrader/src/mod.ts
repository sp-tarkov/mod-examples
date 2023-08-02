import { DependencyContainer } from "tsyringe";

// SPT types
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ITraderConfig } from "@spt-aki/models/spt/config/ITraderConfig";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";

// New trader settings
import * as baseJson from "../db/base.json";
import { TraderHelper } from "./traderHelpers";
import { FluentAssortConstructor } from "./fluentTraderAssortCreator";
import { Money } from "@spt-aki/models/enums/Money";
import { Traders } from "@spt-aki/models/enums/Traders";
import { HashUtil } from "@spt-aki/utils/HashUtil";

class SampleTrader implements IPreAkiLoadMod, IPostDBLoadMod
{
    private mod: string
    private logger: ILogger
    private traderHeper: TraderHelper
    private fluentTraderAssortHeper: FluentAssortConstructor

    constructor() {
        this.mod = "13AddTrader"; // Set name of mod so we can log it to console later
    }

    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    public preAkiLoad(container: DependencyContainer): void
    {
        // Get a logger
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);

        // Get SPT code/data we need later
        const preAkiModLoader: PreAkiModLoader = container.resolve<PreAkiModLoader>("PreAkiModLoader");
        const imageRouter: ImageRouter = container.resolve<ImageRouter>("ImageRouter");
        const hashUtil: HashUtil = container.resolve<HashUtil>("HashUtil");
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig: ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);

        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.traderHeper = new TraderHelper();
        this.fluentTraderAssortHeper = new FluentAssortConstructor(hashUtil, this.logger);
        this.traderHeper.registerProfileImage(baseJson, this.mod, preAkiModLoader, imageRouter, "cat.jpg");
        this.traderHeper.setTraderUpdateTime(traderConfig, baseJson, 3600);

        // Add trader to trader enum
        Traders[baseJson._id] = baseJson._id;

        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    public postDBLoad(container: DependencyContainer): void
    {
        this.logger.debug(`[${this.mod}] postDb Loading... `);

        // Resolve SPT classes we'll use
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const jsonUtil: JsonUtil = container.resolve<JsonUtil>("JsonUtil");

        // Get a reference to the database tables
        const tables = databaseServer.getTables();

        // Add new trader to the trader dictionary in DatabaseServer - has no assorts (items) yet
        this.traderHeper.addTraderToDb(baseJson, tables, jsonUtil);

        // Add milk
        const MILK_ID = "575146b724597720a27126d5"; // Can find item ids in `database\templates\items.json` or with https://db.sp-tarkov.com/search
        this.fluentTraderAssortHeper.createSingleAssortItem(MILK_ID)
                                    .addStackCount(200)
                                    .addBuyRestriction(10)
                                    .addMoneyCost(Money.ROUBLES, 2000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);

        // Add 3x bitcoin + salewa for milk barter
        const BITCOIN_ID = "59faff1d86f7746c51718c9c"
        const SALEWA_ID = "544fb45d4bdc2dee738b4568";
        this.fluentTraderAssortHeper.createSingleAssortItem(MILK_ID)
                                    .addStackCount(100)
                                    .addBarterCost(BITCOIN_ID, 3)
                                    .addBarterCost(SALEWA_ID, 1)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);


        // Add glock as money purchase
        this.fluentTraderAssortHeper.createComplexAssortItem(this.traderHeper.createGlock())
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, 20000)
                                    .addBuyRestriction(3)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);

        // Add mp133 preset as mayo barter
        this.fluentTraderAssortHeper.createComplexAssortItem(tables.globals.ItemPresets["584148f2245977598f1ad387"]._items)
                                    .addStackCount(200)
                                    .addBarterCost("5bc9b156d4351e00367fbce9", 1)
                                    .addBuyRestriction(3)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);


        // Add some singular items to trader (items without sub-items e.g. milk/bandage)
        //this.traderHeper.addSingleItemsToTrader(tables, baseJson._id);

        // Add more complex items to trader (items with sub-items, e.g. guns)
        //this.traderHeper.addComplexItemsToTrader(tables, baseJson._id, jsonUtil);

        // Add trader to locale file, ensures trader text shows properly on screen
        // WARNING: adds the same text to ALL locales (e.g. chinese/french/english)
        this.traderHeper.addTraderToLocales(baseJson, tables, baseJson.name, "Cat", baseJson.nickname, baseJson.location, "This is the cat shop");

        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }
}

module.exports = { mod: new SampleTrader() }