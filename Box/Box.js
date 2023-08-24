var Box = /** @class */ (function () {
    function Box() {
        this._box = [];
    }
    Box.prototype.add = function (el) {
        this._box.push(el);
    };
    Box.prototype.remove = function () {
        this._box.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._box.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
var boxTwo = new Box();
boxTwo.add("Pesho");
boxTwo.add("Gosho");
console.log(boxTwo.count);
boxTwo.remove();
console.log(boxTwo.count);
