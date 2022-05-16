export interface IStartOfflineRaidRequestData {
    locationName: string;
    entryPoint: string;
    startTime: number;
    dateTime: string;
    gameSettings: GameSettings;
}
export interface GameSettings {
    timeAndWeatherSettings: TimeAndWeatherSettings;
    botsSettings: BotsSettings;
    wavesSettings: WavesSettings;
}
export interface TimeAndWeatherSettings {
    isRandomTime: boolean;
    isRandomWeather: boolean;
}
export interface BotsSettings {
    isEnabled: boolean;
    isScavWars: boolean;
    botAmount: string;
}
export interface WavesSettings {
    botDifficulty: string;
    isBosses: boolean;
    isTaggedAndCursed: boolean;
    wavesBotAmount: string;
}
