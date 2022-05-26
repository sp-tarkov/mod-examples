export interface IGameConfigResponse {
    aid: string;
    lang: string;
    languages: Record<string, string>;
    ndaFree: boolean;
    taxonomy: number;
    activeProfileId: string;
    backend: Backend;
    utc_time: number;
    totalInGame: number;
    reportAvailable: boolean;
    twitchEventMember: boolean;
}
export interface Backend {
    Trading: string;
    Messaging: string;
    Main: string;
    RagFair: string;
}
