import { DependencyContainer, Lifecycle } from "tsyringe";

import { IMod } from "@spt-types/models/external/mod";
import { MyOnLoadMod } from "./MyOnLoadMod";
import { MyOnLoadOnUpdateMod } from "./MyOnLoadOnUpdateMod";
import { MyOnUpdateMod } from "./MyOnUpdateMod";

class Mod implements IMod
{
    public load(container: DependencyContainer): void
    {
        container.register<MyOnLoadMod>("MyOnLoadMod", MyOnLoadMod, {lifecycle: Lifecycle.Singleton});
        container.register<MyOnUpdateMod>("MyOnUpdateMod", MyOnUpdateMod, {lifecycle: Lifecycle.Singleton});
        container.register<MyOnLoadOnUpdateMod>("MyOnLoadOnUpdateMod", MyOnLoadOnUpdateMod, {lifecycle: Lifecycle.Singleton});
        container.registerType("OnLoad", "MyOnLoadMod");
        container.registerType("OnLoad", "MyOnLoadOnUpdateMod");
        container.registerType("OnUpdate", "MyOnUpdateMod");
        container.registerType("OnUpdate", "MyOnLoadOnUpdateMod");
    }

    public delayedLoad(container: DependencyContainer): void
    {
        return;
    }
}

module.exports = {mod: new Mod()};