(function () {
    var Person = {
        init: function (firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            return this;
        }
    };

    var people = [
        Object.create(Person).init('Stanimira', 'Gencheva'),
        Object.create(Person).init('Valeri', 'Vyrbanov'),
        Object.create(Person).init('Valeri', 'Borisov'),
        Object.create(Person).init('Anna', 'Vasileva'),
        Object.create(Person).init('Liliana', 'Kirilova'),
        Object.create(Person).init('Valeri', 'Todorov'),
        Object.create(Person).init('Aleksandur', 'Borisov'),
        Object.create(Person).init('Jivko', 'Borisov')
    ];

    // 7. By an array of people find the most common first and last name. Use underscore.

    function mostCommonFirstName(people) {
        _.chain(people)
            .groupBy(function (person) {
                return person.firstName;
            })
            .max(function (group) {
                return group.length;
            })
            .each(function (mostCommon, index) {
                if (index === 0) {
                    console.log('The most common first name is: ' + mostCommon.firstName);
                }
            })
    }

    function mostCommonLastName(people) {
        _.chain(people)
            .groupBy(function (person) {
                return person.lastName;
            })
            .max(function (group) {
                return group.length;
            })
            .each(function (mostCommon, index) {
                if (index === 0) {
                    console.log('The most common last name is: ' + mostCommon.lastName);
                }
            })
    }

    mostCommonFirstName(people);
    mostCommonLastName(people);

}());