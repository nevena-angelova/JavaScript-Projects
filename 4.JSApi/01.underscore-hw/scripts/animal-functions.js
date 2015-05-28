(function () {
    var Animal = {
        init: function (name, species, numberOfLegs) {
            this.name = name;
            this.species = species;
            this.numberOfLegs = numberOfLegs;
            return this;
        }
    };

    var animals = [
        Object.create(Animal).init('Cleo', 'cat', 4),
        Object.create(Animal).init('Papi', 'parrot', 2),
        Object.create(Animal).init('Lucifer', 'cat', 4),
        Object.create(Animal).init('Ferdi', 'ant', 6),
        Object.create(Animal).init('Rex', 'dog', 4),
        Object.create(Animal).init('Tomas', 'cat', 4),
        Object.create(Animal).init('Sany', 'centipede', 100),
        Object.create(Animal).init('Lasy', 'dog', 4),
        Object.create(Animal).init('Lili', 'cat', 4),
        Object.create(Animal).init('Roxy', 'fox', 4),
        Object.create(Animal).init('Sofi', 'chimpanzee', 2),
        Object.create(Animal).init('Benji', 'dog', 4)
    ];

    function logDashes() {
        console.log('-------------------------------------------------');
    }

    // 4. Write a function that by a given array of animals, groups them by species and sorts them by number of legs

    function sortGrouped(animals) {
        _.chain(animals)
            .sortBy('numberOfLegs')
            .groupBy(function (animal) {
                return animal.species;
            })
            .each(function (group) {
                console.log(group);
            })
    }

    sortGrouped(animals);

    logDashes();

    // 5.By a given array of animals, find the total number of legs
    //   - Each animal can have 2, 4, 6, 8 or 100 legs

    function allLegsFind(animals) {
        var sumOfLegs = _.reduce(animals, function (memo, animal) {
            return memo + animal.numberOfLegs; // return previous total plus current number of legs
        }, 0); // initialize number of legs with 0 that will be passed as memo

        return sumOfLegs;
    }

    console.log(allLegsFind(animals));


}());




