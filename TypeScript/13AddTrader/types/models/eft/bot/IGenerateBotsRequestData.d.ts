export interface IGenerateBotsRequestData {
    conditions: Condition[];
}
export interface Condition {
    Role: string;
    Limit: number;
    Difficulty: string;
}
