import { IBaseInteractionRequestData } from "../common/request/IBaseInteractionRequestData";
export interface IOffraidHealRequestData extends IBaseInteractionRequestData {
    Action: "Heal";
    item: string;
    part: BodyPart;
    count: number;
    time: number;
}
export declare enum BodyPart {
    Head = 0,
    Chest = 1,
    Stomach = 2,
    LeftArm = 3,
    RightArm = 4,
    LeftLeg = 5,
    RightLeg = 6,
    Common = 7
}
