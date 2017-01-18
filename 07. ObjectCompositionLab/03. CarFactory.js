function carFactory(object) {
    let smallEngine = { power: 90, volume: 1800};
    let normalEngine = {power: 120, volume: 2400};
    let monsterEngine = {power: 200, volume: 3500};

    let hatchback = {type: 'hatchback', color: ''};
    let coupe = {type: 'coupe', color: ''};

    function wheelSize() {
        let size = object.wheelsize;
        if (size % 2 == 0) Math.floor(--size);
        else Math.floor(size);

        return [size, size, size, size];
    }

    function determineEngine() {
        switch(true) {
            case (object.power <= 90):
                return smallEngine;
                break;
            case object.power <= 120:
                return normalEngine;
                break;
            case object.power <= 200:
                return monsterEngine;
                break;
        }
    }

    function determineCarriage() {
        switch (object.carriage) {
            case "hatchback":
                hatchback.color = object.color;
                return hatchback;
                break;
            case "coupe":
                coupe.color = object.color;
                return coupe;
                break;
        }
    }

    return {
        model: object.model,
        engine: determineEngine(),
        carriage: determineCarriage(),
        wheels: wheelSize()
    };
}

console.log(carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));