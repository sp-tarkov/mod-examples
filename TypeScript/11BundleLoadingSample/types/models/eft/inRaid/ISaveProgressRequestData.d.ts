import { PlayerRaidEndState } from "../../../models/enums/PlayerRaidEndState";
import { IPmcData } from "../common/IPmcData";
import { ISyncHealthRequestData } from "../health/ISyncHealthRequestData";
import { IInsuredItemsData } from "./IInsuredItemsData";
export interface ISaveProgressRequestData {
    exit: PlayerRaidEndState;
    profile: IPmcData;
    isPlayerScav: boolean;
    health: ISyncHealthRequestData;
    insurance: IInsuredItemsData[];
}
