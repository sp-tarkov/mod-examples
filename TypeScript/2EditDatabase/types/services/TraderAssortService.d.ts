import { ITraderAssort } from "../models/eft/common/tables/ITrader";
export declare class TraderAssortService {
    private pristineTraderAssorts;
    getPristineTraderAssort(traderId: string): ITraderAssort;
    setPristineTraderAssort(traderId: string, assort: ITraderAssort): void;
}
