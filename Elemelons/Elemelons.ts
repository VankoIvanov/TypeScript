abstract class Melon {
    weight: number;
    melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): void {
        console.log('Sort:', this.melonSort);
        console.log('Element Index:', this.elementIndex);
    }
}

class Watermelon extends Melon {
    toString() {
        console.log('Element: Water');
        super.toString();
    }
}

class Firemelon extends Melon {
    toString() {
        console.log('Element: Fire');
        super.toString();
    }
}

class Earthmelon extends Melon {
    toString() {
        console.log('Element: Earth');
        super.toString();
    }
}

class Airmelon extends Melon {
    toString() {
        console.log('Element: Air');
        super.toString();
    }
}

