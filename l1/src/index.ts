import { css } from "jquery";

export class Layer1 {
  init() {
    css;
    console.log("Layer1.init");
  }

  run() {
    this.init();
    console.log("Layer1.run");
  }
}
