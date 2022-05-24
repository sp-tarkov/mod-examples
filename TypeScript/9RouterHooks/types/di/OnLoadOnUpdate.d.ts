import { OnLoad } from "./OnLoad";
import { OnUpdate } from "./OnUpdate";
export declare class OnLoadOnUpdate implements OnLoad, OnUpdate {
    onUpdate(timeSinceLastRun: number): boolean;
    onLoad(): void;
    getRoute(): string;
}
