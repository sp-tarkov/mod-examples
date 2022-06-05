import { HandbookHelper } from "../helpers/HandbookHelper";
import { DatabaseServer } from "../servers/DatabaseServer";
export declare class HandbookController {
    private databaseServer;
    private handbookHelper;
    constructor(databaseServer: DatabaseServer, handbookHelper: HandbookHelper);
    load(): void;
}
