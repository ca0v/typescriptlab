import * as $ from "jquery";

import { Layer1 } from "@ca0v/l1";

export class Layer2 extends Layer1 {
  run() {
    $();
    super.run();
    console.log("Layer2.run");
  }
}
