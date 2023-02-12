export interface IGetRaidConfigurationRequestData {
    timeVariant: string;
    raidMode: string;
    metabolismDisabled: boolean;
    playersSpawnPlace: string;
    timeAndWeatherSettings: TimeAndWeatherSettings;
    botSettings: BotSettings;
    wavesSettings: WavesSettings;
    location: string;
}
export interface TimeAndWeatherSettings {
    isRandomTime: boolean;
    isRandomWeather: boolean;
    cloudinessType: string;
    rainType: string;
    windType: string;
    fogType: string;
    timeFlowType: string;
    hourOfDay: number;
}
export interface BotSettings {
    isScavWars: boolean;
    botAmount: string;
}
export interface WavesSettings {
    botAmount: string;
    botDifficulty: string;
    isBosses: boolean;
    isTaggedAndCursed: boolean;
}
