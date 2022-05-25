import { DialogueCallbacks } from "../../callbacks/DialogueCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class DialogStaticRouter extends StaticRouter 
{
    private dialogueCallbacks;
    constructor(dialogueCallbacks: DialogueCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
