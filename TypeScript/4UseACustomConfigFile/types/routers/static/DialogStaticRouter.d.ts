import { DialogueCallbacks } from "../../callbacks/DialogueCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class DialogStaticRouter extends StaticRouter {
    private dialogueCallbacks;
    constructor(dialogueCallbacks: DialogueCallbacks);
}
