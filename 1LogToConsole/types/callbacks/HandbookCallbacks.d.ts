import { HandbookController } from "../controllers/HandbookController";
import { OnLoad } from "../di/OnLoad";
export declare class HandbookCallbacks extends OnLoad {
    private handbookController;
    constructor(handbookController: HandbookController);
    onLoad(): void;
    getRoute(): string;
}
