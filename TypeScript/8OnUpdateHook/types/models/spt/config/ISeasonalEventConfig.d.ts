import { IBaseConfig } from "./IBaseConfig";
export interface ISeasonalEventConfig extends IBaseConfig {
    kind: "aki-seasonalevents";
    events: ISeasonalEvent[];
}
export interface ISeasonalEvent {
    name: string;
    startDay: number;
    startMonth: number;
    endDay: number;
    endMonth: number;
}
