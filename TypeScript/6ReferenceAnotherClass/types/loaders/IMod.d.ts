export interface IMod {
    onload(): any;
}
export interface IContainerMod extends IMod {
    onContainerLoad(): any;
}
