export interface ITemplateItem {
    _id: string;
    _name: string;
    _parent: string;
    _type: string;
    _props: Props;
    _proto: string;
}
export interface Props {
    Name: string;
    ShortName: string;
    Description: string;
    Weight: number;
    BackgroundColor: string;
    Width: number;
    Height: number;
    StackMaxSize: number;
    Rarity?: string;
    SpawnChance?: number;
    CreditsPrice?: number;
    ItemSound: string;
    Prefab: Prefab;
    UsePrefab: Prefab;
    StackObjectsCount: number;
    NotShownInSlot: boolean;
    ExaminedByDefault: boolean;
    ExamineTime: number;
    IsUndiscardable: boolean;
    IsUnsaleable: boolean;
    IsUnbuyable: boolean;
    IsUngivable: boolean;
    IsLockedafterEquip: boolean;
    QuestItem: boolean;
    LootExperience: number;
    ExamineExperience: number;
    HideEntrails: boolean;
    RepairCost: number;
    RepairSpeed: number;
    ExtraSizeLeft: number;
    ExtraSizeRight: number;
    ExtraSizeUp: number;
    ExtraSizeDown: number;
    ExtraSizeForceAdd: boolean;
    MergesWithChildren: boolean;
    CanSellOnRagfair: boolean;
    CanRequireOnRagfair: boolean;
    ConflictingItems: string[];
    DiscardLimit: number;
    Unlootable: boolean;
    UnlootableFromSlot: string;
    UnlootableFromSide: string[];
    AnimationVariantsNumber: number;
    DiscardingBlock: boolean;
    RagFairCommissionModifier: number;
    IsAlwaysAvailableForInsurance: boolean;
    Grids: Grid[];
    Slots: Slot[];
    CanPutIntoDuringTheRaid: boolean;
    CantRemoveFromSlotsDuringRaid: string[];
    weapClass: string;
    weapUseType: string;
    ammoCaliber: string;
    Durability: number;
    MaxDurability: number;
    OperatingResource: number;
    RepairComplexity: number;
    durabSpawnMin: number;
    durabSpawnMax: number;
    isFastReload: boolean;
    RecoilForceUp: number;
    RecoilForceBack: number;
    Convergence: number;
    RecoilAngle: number;
    weapFireType: string[];
    RecolDispersion: number;
    SingleFireRate: number;
    CanQueueSecondShot: boolean;
    bFirerate: number;
    Ergonomics: number;
    Velocity: number;
    bEffDist: number;
    bHearDist: number;
    isChamberLoad: boolean;
    chamberAmmoCount: number;
    isBoltCatch: boolean;
    defMagType: string;
    defAmmo: string;
    AdjustCollimatorsToTrajectory: boolean;
    shotgunDispersion: number;
    Chambers: Chamber[];
    CameraRecoil: number;
    CameraSnap: number;
    ReloadMode: string;
    CenterOfImpact: number;
    AimPlane: number;
    DeviationCurve: number;
    DeviationMax: number;
    Foldable: boolean;
    Retractable: boolean;
    TacticalReloadStiffnes: Xyz;
    TacticalReloadFixation: number;
    RecoilCenter: Xyz;
    RotationCenter: Xyz;
    RotationCenterNoStock: Xyz;
    SizeReduceRight: number;
    FoldedSlot: string;
    CompactHandling: boolean;
    SightingRange: number;
    MinRepairDegradation: number;
    MaxRepairDegradation: number;
    MinRepairKitDegradation: number;
    MaxRepairKitDegradation: number;
    IronSightRange: number;
    MustBoltBeOpennedForExternalReload: boolean;
    MustBoltBeOpennedForInternalReload: boolean;
    BoltAction: boolean;
    HipAccuracyRestorationDelay: number;
    HipAccuracyRestorationSpeed: number;
    HipInnaccuracyGain: number;
    ManualBoltCatch: boolean;
    BurstShotsCount: number;
    BaseMalfunctionChance: number;
    AllowJam: boolean;
    AllowFeed: boolean;
    AllowMisfire: boolean;
    AllowSlide: boolean;
    DurabilityBurnRatio: number;
    HeatFactorGun: number;
    CoolFactorGun: number;
    CoolFactorGunMods: number;
    HeatFactorByShot: number;
    AllowOverheat: boolean;
    DoubleActionAccuracyPenalty: number;
    RecoilPosZMult: number;
    ShotgunDispersion: number;
    StackMinRandom: number;
    StackMaxRandom: number;
    StackSlots: StackSlot[];
    SearchSound: string;
    BlocksArmorVest: boolean;
    RigLayoutName: string;
    armorZone: string[];
    armorClass: number;
    speedPenaltyPercent: number;
    mousePenalty: number;
    weaponErgonomicPenalty: number;
    BluntThroughput: number;
    ArmorMaterial: string;
    medUseTime: number;
    medEffectType: string;
    MaxHpResource: number;
    hpResourceRate: number;
    StimulatorBuffs: string;
    effects_health: EffectsHealth;
    effects_damage: EffectsDamage;
    knifeHitDelay: number;
    knifeHitSlashRate: number;
    knifeHitStabRate: number;
    knifeHitRadius: number;
    knifeHitSlashDam: number;
    knifeHitStabDam: number;
    knifeDurab: number;
    PrimaryDistance: number;
    SecondryDistance: number;
    SlashPenetration: number;
    StabPenetration: number;
    PrimaryConsumption: number;
    SecondryConsumption: number;
    DeflectionConsumption: number;
    MaxResource: number;
    AppliedTrunkRotation: Xyz;
    AppliedHeadRotation: Xyz;
    DisplayOnModel: boolean;
    AdditionalAnimationLayer: number;
    StaminaBurnRate: number;
    ColliderScaleMultiplier: Xyz;
    ammoType: string;
    InitialSpeed: number;
    BallisticCoeficient: number;
    BulletMassGram: number;
    BulletDiameterMilimeters: number;
    Damage: number;
    ammoAccr: number;
    ammoRec: number;
    ammoDist: number;
    buckshotBullets: number;
    PenetrationPower: number;
    PenetrationPowerDiviation: number;
    ammoHear: number;
    ammoSfx: string;
    MisfireChance: number;
    MinFragmentsCount: number;
    MaxFragmentsCount: number;
    ammoShiftChance: number;
    casingName: string;
    casingEjectPower: number;
    casingMass: number;
    casingSounds: string;
    ProjectileCount: number;
    PenetrationChance: number;
    RicochetChance: number;
    FragmentationChance: number;
    Deterioration: number;
    SpeedRetardation: number;
    Tracer: boolean;
    TracerColor: string;
    TracerDistance: number;
    ArmorDamage: number;
    Caliber: string;
    StaminaBurnPerDamage: number;
    HeavyBleedingDelta: number;
    LightBleedingDelta: number;
    ShowBullet: boolean;
    HasGrenaderComponent: boolean;
    FuzeArmTimeSec: number;
    ExplosionStrength: number;
    MinExplosionDistance: number;
    MaxExplosionDistance: number;
    FragmentsCount: number;
    FragmentType: string;
    ShowHitEffectOnExplode: boolean;
    ExplosionType: string;
    AmmoLifeTimeSec: number;
    Contusion: Contusion;
    ArmorDistanceDistanceDamage: Xyz;
    Blindness: Xyz;
    IsLightAndSoundShot: boolean;
    LightAndSoundShotAngle: number;
    LightAndSoundShotSelfContusionTime: number;
    LightAndSoundShotSelfContusionStrength: number;
    MalfMisfireChance: number;
    DurabilityBurnModificator: number;
    HeatFactor: number;
    MalfFeedChance: number;
    Accuracy: number;
    Recoil: number;
    Loudness: number;
    EffectiveDistance: number;
    RaidModdable: boolean;
    ToolModdable: boolean;
    BlocksFolding: boolean;
    BlocksCollapsible: boolean;
    IsAnimated: boolean;
    HasShoulderContact: boolean;
    DoubleActionAccuracyPenaltyMult: number;
    magAnimationIndex: number;
    Cartridges: Cartridge[];
    CanFast: boolean;
    CanHit: boolean;
    CanAdmin: boolean;
    LoadUnloadModifier: number;
    CheckTimeModifier: number;
    CheckOverride: number;
    ReloadMagType: string;
    VisibleAmmoRangesString: string;
    MalfunctionChance: number;
    TagColor: number;
    TagName: string;
    MaximumNumberOfUsage: number;
    CustomAimPlane: string;
    sightModType: string;
    aimingSensitivity: number;
    SightModesCount: number;
    OpticCalibrationDistances: number[];
    ScopesCount: number;
    AimSensitivity: number[][];
    ModesCount: number[];
    Zooms: number[][];
    CalibrationDistances: number[][];
    Intensity: number;
    Mask: string;
    MaskSize: number;
    NoiseIntensity: number;
    NoiseScale: number;
    Color: Color;
    DiffuseIntensity: number;
    HasHinge: boolean;
    Resource?: number;
    CoolFactor?: number;
    foodUseTime?: number;
    foodEffectType?: string;
    MaxRepairResource: number;
    RepairQuality: number;
    RepairType: string;
    TargetItemFilter: string[];
    apResource: number;
    krResource: number;
}
export interface Prefab {
    path: string;
    rcid: string;
}
export interface Grid {
    _name: string;
    _id: string;
    _parent: string;
    _props: GridProps;
    _proto: string;
}
export interface GridProps {
    filters: GridFilter[];
    cellsH: number;
    cellsV: number;
    minCount: number;
    maxCount: number;
    maxWeight: number;
    isSortingTable: boolean;
}
export interface GridFilter {
    Filter: string[];
    ExcludedFilter: string[];
}
export interface Slot {
    _name: string;
    _id: string;
    _parent: string;
    _props: SlotProps;
    _required: boolean;
    _mergeSlotWithChildren: boolean;
    _proto: string;
}
export interface SlotProps {
    filters: Filter[];
}
export interface Chamber {
    _name: string;
    _id: string;
    _parent: string;
    _props: ChamberProps;
    _required: boolean;
    _mergeSlotWithChildren: boolean;
    _proto: string;
}
export interface ChamberProps {
    filters: FilterProps[];
}
export interface FilterProps {
    Filter: string[];
}
export interface Xyz {
    x: number;
    y: number;
    z: number;
}
export interface StackSlot {
    _name?: string;
    _id: string;
    _sptTpl: string;
    parent: string;
    location: any;
    slotId: string;
    _max_count: number;
    _props?: StackSlotProps;
    _proto?: string;
    upd: any;
}
export interface StackSlotProps {
    filters: Filter[];
}
export interface EffectsHealth {
    Hydration: Hydration;
}
export interface Hydration {
    value: number;
}
export interface EffectsDamage {
    Pain: Pain;
    Contusion: Contusion;
}
export interface Pain {
    delay: number;
    duration: number;
    fadeOut: number;
}
export interface Contusion {
    delay: number;
    duration: number;
    fadeOut: number;
}
export interface Cartridge {
    _name: string;
    _id: string;
    _parent: string;
    _max_count: number;
    _props: CartridgeProps;
    _proto: string;
}
export interface CartridgeProps {
    filters: Filter[];
}
export interface Filter {
    Shift?: number;
    Filter: string[];
    AnimationIndex?: number;
}
export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}
