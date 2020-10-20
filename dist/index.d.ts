declare type PromiseFunc = (item: any) => Promise<any>;
interface Array<T> {
    foobar(action: PromiseFunc): Promise<Array<any>>;
}
declare module "l1/src/index" {
    export class Layer1 {
        init(): void;
        run(): void;
    }
}
declare module "l2/src/index" {
    import { Layer1 } from "l1/src/index";
    export class Layer2 extends Layer1 {
        run(): void;
    }
}
declare module "l3/src/index" {
    import { Layer2 } from "l2/src/index";
    export class Layer3 extends Layer2 {
        run(): void;
    }
}
declare module "src/index" {
    export function run(): void;
}
//# sourceMappingURL=index.d.ts.map