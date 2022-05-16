import { ITraderAssort } from "../@types/eft/common/tables/ITrader";
export declare class TraderAssortService {
    private pristineTraderAssorts;
    getPristineTraderAssort(traderId: string): ITraderAssort;
    setPristineTraderAssort(traderId: string, assort: ITraderAssort): void;
}
