(function () {
    var Book = {
        init: function (autor, bookTitle) {
            this.autor = autor;
            this.bookTitle = bookTitle;
            return this;
        },
    };

    var books = [
        Object.create(Book).init('Ursula K. Le Guin', 'Earthsea'),
        Object.create(Book).init('Terry Pratchett', 'The Colour of Magic'),
        Object.create(Book).init('Terry Pratchett', 'Snuff'),
        Object.create(Book).init('J. R. R. Tolkien', 'The Lord of the Rings'),
        Object.create(Book).init('Terry Pratchett', 'Hogfather'),
        Object.create(Book).init('J. R. R. Tolkien', 'The Hobbit'),
        Object.create(Book).init('Terry Pratchett', 'Soul Music'),
        Object.create(Book).init('Roger Zelazny', 'The Chronicles of Amber'),
        Object.create(Book).init('Ursula K. Le Guin', 'The Other Wind'),
    ];

    function logDashes() {
        console.log('-------------------------------------------------');
    }

    // 6. By a given collection of books, find the most popular author (the author with the highest number of books)

    function findMostPopular(books) {
        _.chain(books)
            .groupBy(function (book) {
                return book.autor;
            })
            .max(function (group) {
                return group.length;
            })
            .each(function (mostPopular, index) {
                if (index === 0) {
                    console.log(mostPopular.autor);
                }
            })
    }

    findMostPopular(books);

}())