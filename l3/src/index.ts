import * as $ from "jquery";
import { Layer2 } from "@ca0v/l2";
import { Layer1 } from "@ca0v/l1";

export class Layer3 extends Layer2 {
  run() {
    $();
    super.run();
    console.log("Layer2.run");
    let l1 = new Layer1();
    l1.run();
  }
}
