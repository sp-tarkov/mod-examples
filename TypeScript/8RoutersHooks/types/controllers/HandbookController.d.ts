import { DatabaseServer } from "../servers/DatabaseServer";
import { HandbookHelper } from "../helpers/HandbookHelper";
export declare class HandbookController {
    private databaseServer;
    private handbookHelper;
    constructor(databaseServer: DatabaseServer, handbookHelper: HandbookHelper);
    load(): void;
}
