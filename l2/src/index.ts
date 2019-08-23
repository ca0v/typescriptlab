import { Tween } from "jquery";

import { Layer1 } from "@ca0v/l1";

export class Layer2 extends Layer1 {
  run() {
    console.log("Tween", Tween);
    super.run();
    console.log("Layer2.run");
  }
}
