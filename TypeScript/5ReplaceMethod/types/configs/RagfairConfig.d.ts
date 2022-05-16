export const runIntervalSeconds: number;
export namespace sell {
    const fees: boolean;
    namespace chance {
        const base: number;
        const overprices: number;
        const underpriced: number;
    }
    namespace time {
        const base_1: number;
        export { base_1 as base };
        export const min: number;
        export const max: number;
    }
    namespace reputation {
        const gain: number;
        const loss: number;
    }
}
export const traders: {
    "54cb50c76803fa8b248b4571": boolean;
    "54cb57776803fa99248b456e": boolean;
    "579dc571d53a0658a154fbec": boolean;
    "58330581ace78e27b8b10cee": boolean;
    "5935c25fb3acc3127c3d8cd9": boolean;
    "5a7c2eca46aef81a7ca2145d": boolean;
    "5ac3b934156ae10c4430e83c": boolean;
    "5c0647fdd443bc2504c2d371": boolean;
    ragfair: boolean;
};
export namespace dynamic {
    const expiredOfferThreshold: number;
    namespace offerItemCount {
        const min_1: number;
        export { min_1 as min };
        const max_1: number;
        export { max_1 as max };
    }
    namespace price {
        const min_2: number;
        export { min_2 as min };
        const max_2: number;
        export { max_2 as max };
    }
    namespace endTimeSeconds {
        const min_3: number;
        export { min_3 as min };
        const max_3: number;
        export { max_3 as max };
    }
    namespace condition {
        export const conditionChance: number;
        const min_4: number;
        export { min_4 as min };
        const max_4: number;
        export { max_4 as max };
    }
    namespace stackablePercent {
        const min_5: number;
        export { min_5 as min };
        const max_5: number;
        export { max_5 as max };
    }
    namespace nonStackableCount {
        const min_6: number;
        export { min_6 as min };
        const max_6: number;
        export { max_6 as max };
    }
    namespace rating {
        const min_7: number;
        export { min_7 as min };
        const max_7: number;
        export { max_7 as max };
    }
    const currencies: {
        "5449016a4bdc2d6f028b456f": number;
        "5696686a4bdc2da3298b456a": number;
        "569668774bdc2da2298b4568": number;
    };
    const showAsSingleStack: any[];
    namespace blacklist {
        const custom: string[];
        const enableBsgList: boolean;
        const enableQuestList: boolean;
    }
}
