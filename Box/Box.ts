class Box<T> {
    private _box = [];

    public add(el: T) {
        this._box.push(el);
    }

    public remove() {
        this._box.pop();
    }

    get count(): number {
        return this._box.length;
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let boxTwo = new Box<String>();
boxTwo.add("Pesho");
boxTwo.add("Gosho");
console.log(boxTwo.count);
boxTwo.remove();
console.log(boxTwo.count);

