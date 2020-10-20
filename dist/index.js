var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
Array.prototype.foobar = function (asyncAction) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(this.map(function (element) { return asyncAction(element); }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
define("l1/src/index", ["require", "exports", "jquery"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Layer1 = /** @class */ (function () {
        function Layer1() {
        }
        Layer1.prototype.init = function () {
            console.log("isArray", jquery_1.isArray([]));
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
        console.log("done");
        alert("see console 2");
        var a = new Array();
        console.log(a.foobar, "mapParallel");
    }
    exports.run = run;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9leHQvQXJyYXkudHMiLCIuLi9sMS9zcmMvaW5kZXgudHMiLCIuLi9sMi9zcmMvaW5kZXgudHMiLCIuLi9sMy9zcmMvaW5kZXgudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBa0MsV0FBVzs7Ozt3QkFDN0QscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUMsRUFBQTt3QkFBckUsc0JBQU8sU0FBOEQsRUFBQzs7OztDQUN2RSxDQUFDOzs7O0lDTkY7UUFBQTtRQVVBLENBQUM7UUFUQyxxQkFBSSxHQUFKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVELG9CQUFHLEdBQUg7WUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDSCxhQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFWWSx3QkFBTTs7Ozs7SUNFbkI7UUFBNEIsMEJBQU07UUFBbEM7O1FBTUEsQ0FBQztRQUxDLG9CQUFHLEdBQUg7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFLLENBQUMsQ0FBQztZQUM1QixpQkFBTSxHQUFHLFdBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNILGFBQUM7SUFBRCxDQUFDLEFBTkQsQ0FBNEIsV0FBTSxHQU1qQztJQU5ZLHdCQUFNOzs7OztJQ0FuQjtRQUE0QiwwQkFBTTtRQUFsQzs7UUFRQSxDQUFDO1FBUEMsb0JBQUcsR0FBSDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLGlCQUFNLEdBQUcsV0FBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLFdBQU0sRUFBRSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLENBQUM7UUFDSCxhQUFDO0lBQUQsQ0FBQyxBQVJELENBQTRCLFdBQU0sR0FRakM7SUFSWSx3QkFBTTs7Ozs7SUNBbkIsU0FBZ0IsR0FBRztRQUNqQixJQUFJLEVBQUUsR0FBRyxJQUFJLFdBQU0sRUFBRSxDQUFDO1FBQ3RCLElBQUksRUFBRSxHQUFHLElBQUksV0FBTSxFQUFFLENBQUM7UUFDdEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxXQUFNLEVBQUUsQ0FBQztRQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdkIsSUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQWJELGtCQWFDIn0=