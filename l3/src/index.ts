import * as $ from "jquery";
import { Layer2 } from "@ca0v/l2";

export class Layer3 extends Layer2 {
  run() {
    $();
    super.run();
    console.log("Layer2.run");
  }
}
