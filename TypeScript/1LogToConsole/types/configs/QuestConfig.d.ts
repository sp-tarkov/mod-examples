export const redeemTime: number;
export const repeatableQuests: {
    name: string;
    types: string[];
    resetTime: number;
    numQuests: number;
    minPlayerLevel: number;
    rewardScaling: {
        levels: number[];
        experience: number[];
        roubles: number[];
        items: number[];
        reputation: number[];
        rewardSpread: number;
    };
    locations: {
        any: string[];
        factory4_day: string[];
        bigmap: string[];
        Woods: string[];
        Shoreline: string[];
        Interchange: string[];
        Lighthouse: string[];
        laboratory: string[];
        RezervBase: string[];
    };
    traderWhitelist: {
        traderId: any;
        questTypes: string[];
    }[];
    questConfig: {
        Exploration: {
            maxExtracts: number;
            specificExits: {
                probability: number;
                passageRequirementWhitelist: string[];
            };
        };
        Completion: {
            minRequestedAmount: number;
            maxRequestedAmount: number;
            minRequestedBulletAmount: number;
            maxRequestedBulletAmount: number;
            useWhitelist: boolean;
            useBlacklist: boolean;
        };
        Elimination: {
            targets: {
                key: string;
                relativeProbability: number;
                data: {
                    isBoss: boolean;
                };
            }[];
            bodyPartProb: number;
            bodyParts: {
                key: string;
                relativeProbability: number;
                data: string[];
            }[];
            specificLocationProb: number;
            distLocationBlacklist: string[];
            distProb: number;
            maxDist: number;
            minDist: number;
            maxKills: number;
            minKills: number;
        };
    };
}[];
