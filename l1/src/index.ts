import { isArray } from "jquery";

export class Layer1 {
  init() {
    console.log("isArray", isArray([]));
    console.log("Layer1.init");
  }

  run() {
    this.init();
    console.log("Layer1.run");
  }
}
