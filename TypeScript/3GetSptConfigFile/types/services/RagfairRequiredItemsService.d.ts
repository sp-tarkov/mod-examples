import { PaymentHelper } from "../helpers/PaymentHelper";
import { RagfairOfferService } from "../services/RagfairOfferService";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class RagfairRequiredItemsService {
    protected logger: ILogger;
    protected paymentHelper: PaymentHelper;
    protected ragfairOfferService: RagfairOfferService;
    protected requiredItemsCache: {};
    constructor(logger: ILogger, paymentHelper: PaymentHelper, ragfairOfferService: RagfairOfferService);
    getRequiredItems(searchId: string): any;
    buildRequiredItemTable(): void;
}
