var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("l1/src/index", ["require", "exports", "jquery"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Layer1 = /** @class */ (function () {
        function Layer1() {
        }
        Layer1.prototype.init = function () {
            console.log("css", jquery_1.css);
            console.log("Layer1.init");
        };
        Layer1.prototype.run = function () {
            this.init();
            console.log("Layer1.run");
        };
        return Layer1;
    }());
    exports.Layer1 = Layer1;
});
define("l2/src/index", ["require", "exports", "jquery", "l1/src/index"], function (require, exports, jquery_2, l1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Layer2 = /** @class */ (function (_super) {
        __extends(Layer2, _super);
        function Layer2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Layer2.prototype.run = function () {
            console.log("Tween", jquery_2.Tween);
            _super.prototype.run.call(this);
            console.log("Layer2.run");
        };
        return Layer2;
    }(l1_1.Layer1));
    exports.Layer2 = Layer2;
});
define("l3/src/index", ["require", "exports", "jquery", "l2/src/index", "l1/src/index"], function (require, exports, $, l2_1, l1_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Layer3 = /** @class */ (function (_super) {
        __extends(Layer3, _super);
        function Layer3() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Layer3.prototype.run = function () {
            console.log("$", $);
            _super.prototype.run.call(this);
            console.log("Layer2.run");
            var l1 = new l1_2.Layer1();
            l1.run();
        };
        return Layer3;
    }(l2_1.Layer2));
    exports.Layer3 = Layer3;
});
define("src/index", ["require", "exports", "l1/src/index", "l2/src/index", "l3/src/index"], function (require, exports, l1_3, l2_2, l3_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function run() {
        var l1 = new l1_3.Layer1();
        var l2 = new l2_2.Layer2();
        var l3 = new l3_1.Layer3();
        console.log(l1, l2, l3);
        l3.init();
        l3.run();
    }
    exports.run = run;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sMS9zcmMvaW5kZXgudHMiLCIuLi9sMi9zcmMvaW5kZXgudHMiLCIuLi9sMy9zcmMvaW5kZXgudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUVBO1FBQUE7UUFVQSxDQUFDO1FBVEMscUJBQUksR0FBSjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQUcsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVELG9CQUFHLEdBQUg7WUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDSCxhQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFWWSx3QkFBTTs7Ozs7SUNFbkI7UUFBNEIsMEJBQU07UUFBbEM7O1FBTUEsQ0FBQztRQUxDLG9CQUFHLEdBQUg7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFLLENBQUMsQ0FBQztZQUM1QixpQkFBTSxHQUFHLFdBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNILGFBQUM7SUFBRCxDQUFDLEFBTkQsQ0FBNEIsV0FBTSxHQU1qQztJQU5ZLHdCQUFNOzs7OztJQ0FuQjtRQUE0QiwwQkFBTTtRQUFsQzs7UUFRQSxDQUFDO1FBUEMsb0JBQUcsR0FBSDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLGlCQUFNLEdBQUcsV0FBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLFdBQU0sRUFBRSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLENBQUM7UUFDSCxhQUFDO0lBQUQsQ0FBQyxBQVJELENBQTRCLFdBQU0sR0FRakM7SUFSWSx3QkFBTTs7Ozs7SUNBbkIsU0FBZ0IsR0FBRztRQUNqQixJQUFJLEVBQUUsR0FBRyxJQUFJLFdBQU0sRUFBRSxDQUFDO1FBQ3RCLElBQUksRUFBRSxHQUFHLElBQUksV0FBTSxFQUFFLENBQUM7UUFDdEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxXQUFNLEVBQUUsQ0FBQztRQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQVJELGtCQVFDIn0=