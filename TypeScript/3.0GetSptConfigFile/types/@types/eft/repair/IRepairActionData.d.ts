export interface IRepairActionData {
    Action: string;
    tid: string;
    repairItems: RepairItem[];
}
export interface RepairItem {
    _id: string;
    count: number;
}
