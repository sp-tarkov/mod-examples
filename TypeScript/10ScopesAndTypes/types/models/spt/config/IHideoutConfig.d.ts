import { IBaseConfig } from "./IBaseConfig";
export interface IHideoutConfig extends IBaseConfig {
    kind: "aki-hideout";
    runIntervalSeconds: number;
    fuelDrainRateMultipler: number;
    hoursForSkillCrafting: number;
}
