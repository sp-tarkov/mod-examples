import { IPmcData } from "../@types/eft/common/IPmcData";
import { IPlayerIncrementSkillLevelRequestData } from "../@types/eft/player/IPlayerIncrementSkillLevelRequestData";
export declare class PlayerController {
    /**
     * increases the profile skill and updates any output
     * @param {Object} pmcData
     * @param {Object} output
     * @param {String} skillName
     * @param {Number} amount
     */
    static incrementSkillLevel(pmcData: IPmcData, output: IPlayerIncrementSkillLevelRequestData, skillName: string, amount: number): void;
    /**
     * @param {Object} pmcData
     * @returns number
     */
    static calculateLevel(pmcData: IPmcData): number;
    /**
     * @returns number
     */
    static getRandomExperience(): number;
    /**
     * Made a 2d array table with 0 - free slot and 1 - used slot
     * @param {Object} pmcData
     * @param {string} sessionID
     * @returns Array
     */
    static getStashSlotMap(pmcData: IPmcData, sessionID: string): any[][];
}
