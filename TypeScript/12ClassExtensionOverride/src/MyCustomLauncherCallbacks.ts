import { LauncherCallbacks } from "@spt-aki/callbacks/LauncherCallbacks";
import { LauncherController } from "@spt-aki/controllers/LauncherController";
import { IEmptyRequestData } from "@spt-aki/models/eft/common/IEmptyRequestData";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { SaveServer } from "@spt-aki/servers/SaveServer";
import { HttpResponseUtil } from "@spt-aki/utils/HttpResponseUtil";
import { Watermark } from "@spt-aki/utils/Watermark";
import { inject, injectable } from "tsyringe";

// We need to declare this class as injectable, this will add the container
// metadata
// You dont need to worry too much about that, just remember to add this
@injectable()
export class MyCustomLauncherCallbacks extends LauncherCallbacks // <<<<=== This class extends the callback class
{
    // We need to make sure we use the constructor and pass the dependencies to the parent class!
    constructor(
    // @inject() will make sure to find the component with the right token and put them there
    @inject("HttpResponseUtil") httpResponse: HttpResponseUtil,
        @inject("LauncherController") launcherController: LauncherController,
        @inject("SaveServer") saveServer: SaveServer,
        @inject("Watermark") watermark: Watermark,
        @inject("WinstonLogger") private logger: ILogger
    )
    {
        // Pass the parent class (LauncherCallbacks) the dependencies it needs to work
        super(httpResponse, launcherController, saveServer, watermark);
    }

    // We override the parent method with the EXACT same signature
    public override ping(url: string, info: IEmptyRequestData, sessionID: string): string 
    {
        // We are overriding the parent method, so ONLY this method will run, not the parent!
        // If we wanted to run both, you can always write:
        //
        // string parentResult = super.ping(url, info, sessionID);
        // The super keyword will point to the parent method instead
        // the variable parentResult will hold the result from the parent
        this.logger.success("Our custom method is dancing baby!");
        return "Lets dance";
    }
    
}