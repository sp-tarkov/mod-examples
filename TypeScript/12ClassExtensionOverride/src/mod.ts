import { DependencyContainer } from "tsyringe";

import { IPreAkiLoadMod } from "@spt/models/external/IPreAkiLoadMod"
import { MyCustomLauncherCallbacks } from "./MyCustomLauncherCallbacks";

class Mod implements IPreAkiLoadMod
{
    // This example will show you how to override and register your own components and use them
    // The container will by default register all AKI dependencies, but you can inject into it
    // you own custom implementations the server will then use.
    // In this example we will take the LauncherCallbacks class and override the ping() method
    // for our own custom method that will return "Lets dance" instead of "pong!"

    // Perform these actions before server fully loads
    public preAkiLoad(container: DependencyContainer): void {
        // Here we register our override for the component and we NEED to use the same
        // token the server is using to register it.
        // You can find this tokens here:
        // https://dev.sp-tarkov.com/SPT-AKI/Server/src/branch/development/project/src/di/Container.ts
        // In this scenario we want to override LauncherCallbacks, so we find the proper registry:
        //
        // depContainer.register<LauncherCallbacks>("LauncherCallbacks", { useClass: LauncherCallbacks });
        //
        // So what we want to do is register it with EXACTLY the same token
        container.register<MyCustomLauncherCallbacks>("MyCustomLauncherCallbacks", MyCustomLauncherCallbacks);
        container.register("LauncherCallbacks", { useToken: "MyCustomLauncherCallbacks" });

        // Now that its registered, the server will automatically find this dependency and use it where ever its needed
    }
}

export const mod = new Mod();
