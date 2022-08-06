import { ContextVariableType } from "./ContextVariableType";
export declare class ContextVariable {
    private value;
    private timestamp;
    private type;
    constructor(value: any, type: ContextVariableType);
    getValue(): any;
    getTimestamp(): Date;
    getType(): ContextVariableType;
}
