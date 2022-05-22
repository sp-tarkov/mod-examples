export interface ISettingsBase {
    config: Config;
}
export interface Config {
    AFKTimeoutSeconds: number;
    AdditionalRandomDelaySeconds: number;
    ClientSendRateLimit: number;
    CriticalRetriesCount: number;
    DefaultRetriesCount: number;
    FirstCycleDelaySeconds: number;
    FramerateLimit: FramerateLimit;
    GroupStatusInterval: number;
    KeepAliveInterval: number;
    Mark502and504AsNonImportant: boolean;
    MemoryManagementSettings: MemoryManagementSettings;
    NVidiaHighlights: boolean;
    NextCycleDelaySeconds: number;
    PingServerResultSendInterval: number;
    PingServersInterval: number;
    ReleaseProfiler: ReleaseProfiler;
    SecondCycleDelaySeconds: number;
    TurnOffLogging: boolean;
    WeaponOverlapDistanceCulling: number;
    WebDiagnosticsEnabled: boolean;
}
export interface FramerateLimit {
    MaxFramerateGameLimit: number;
    MaxFramerateLobbyLimit: number;
    MinFramerateLimit: number;
}
export interface MemoryManagementSettings {
    AggressiveGC: boolean;
    GigabytesRequiredToDisableGCDuringRaid: number;
    HeapPreAllocationEnabled: boolean;
    HeapPreAllocationMB: number;
    OverrideRamCleanerSettings: boolean;
    RamCleanerEnabled: boolean;
}
export interface ReleaseProfiler {
    Enabled: boolean;
    MaxRecords: number;
    RecordTriggerValue: number;
}
