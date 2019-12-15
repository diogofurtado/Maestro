import { registerRootComponent } from "expo";
import { activateKeepAwake } from "expo-keep-awake";

// import App from "./App";
import App from "./RequestAPI";

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
