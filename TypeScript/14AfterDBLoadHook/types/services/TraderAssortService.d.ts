import { ITraderAssort } from "../models/eft/common/tables/ITrader";
export declare class TraderAssortService {
    protected pristineTraderAssorts: Record<string, ITraderAssort>;
    getPristineTraderAssort(traderId: string): ITraderAssort;
    setPristineTraderAssort(traderId: string, assort: ITraderAssort): void;
}
