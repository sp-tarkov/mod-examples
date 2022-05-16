export const runIntervalSeconds: number;
export namespace scavCase {
    const rewardParentBlacklist: any[];
    const rewardItemBlacklist: any[];
    namespace ammoRewards {
        const giveMultipleOfTen: boolean;
        const minAmount: number;
    }
    namespace moneyRewards {
        const enabled: boolean;
        namespace rub {
            const min: number;
            const max: number;
        }
        namespace usd {
            const min_1: number;
            export { min_1 as min };
            const max_1: number;
            export { max_1 as max };
        }
        namespace eur {
            const min_2: number;
            export { min_2 as min };
            const max_2: number;
            export { max_2 as max };
        }
    }
}
