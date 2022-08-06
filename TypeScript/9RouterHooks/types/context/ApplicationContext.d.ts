import { ContextVariable } from "./ContextVariable";
import { ContextVariableType } from "./ContextVariableType";
export declare class ApplicationContext {
    private variables;
    private static holderMaxSize;
    getLatestValue(type: ContextVariableType): ContextVariable;
    getValues(type: ContextVariableType): ContextVariable[];
    addValue(type: ContextVariableType, value: any): void;
}
