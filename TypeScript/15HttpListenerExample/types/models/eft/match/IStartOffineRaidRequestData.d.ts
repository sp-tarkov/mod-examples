import { BotAmount } from "../../enums/BotAmount";
import { BotDifficulty } from "../../enums/BotDifficulty";
export interface IStartOfflineRaidRequestData {
    locationName: string;
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
    botAmount: BotAmount;
}
export interface WavesSettings {
    botDifficulty: BotDifficulty;
    isBosses: boolean;
    isTaggedAndCursed: boolean;
    wavesBotAmount: BotAmount;
}
