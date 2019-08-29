import { Layer1 } from "@ca0v/l1";
import { Layer2 } from "@ca0v/l2";
import { Layer3 } from "@ca0v/l3";

export function run() {
  let l1 = new Layer1();
  let l2 = new Layer2();
  let l3 = new Layer3();

  console.log(l1, l2, l3);
  l3.init();
  l3.run();
  console.log("done");
  alert("see console 2");
}
