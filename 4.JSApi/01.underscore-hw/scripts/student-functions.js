(function () {
    var Student = {
        init: function (firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            return this;
        },
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    };

    var students = [
        Object.create(Student).init('Stanimira', 'Gencheva', '23'),
        Object.create(Student).init('Kaloyan', 'Vyrbanov', '12'),
        Object.create(Student).init('Valeri', 'Vladislavov', '44'),
        Object.create(Student).init('Anna', 'Vasileva', '25'),
        Object.create(Student).init('Liliana', 'Kirilova', '31'),
        Object.create(Student).init('Jivko', 'Todorov', '24'),
        Object.create(Student).init('Aleksandur', 'Borisov', '18')
    ];

    function logDashes() {
        console.log('-------------------------------------------------');
    }

    // 1. Write a method that from a given array of students finds all students
    // whose first name is before its last name alphabetically.
    // Print the students in descending order by full name. Use Underscore.js

    function withFirstBeforeLastNameFind(students) {
        _.chain(students)
            .filter(function (student) {
                return (student.firstName < student.lastName) && (student.firstName[0] !== student.lastName[0]);
            })
            .sortBy(function (student) {
                return -1 * student.lastName;
            })
            .each(function (student) {
                console.log(student.fullName());
            });
    }

    withFirstBeforeLastNameFind(students);

    logDashes();

    // 2. Write function that finds the first name and last name of all students with age between 18 and 24.
    // Use Underscore.js

    function withAgeInIntervalFind(students, minAge, maxAge) {
        _.chain(students)
            .filter(function (student) {
                return student.age > minAge && student.age < maxAge;
            })
            .each(function (student) {
                console.log(student.fullName());
            });
    }

    withAgeInIntervalFind(students, 18, 24);

    logDashes();

    // 3. Write a function that by a given array of students finds the student with highest marks

    function maxMarkedFind(students) {
        var max = _.max(students, function (student) {
            return student.age; // returns the object that has the max property
        });

        console.log(max.fullName() + ' - ' + max.age);
    }

    maxMarkedFind(students);

    logDashes();
}());