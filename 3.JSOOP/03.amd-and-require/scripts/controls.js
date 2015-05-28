define(["handlebars"], function () {
    function ComboBox(people) {
        function render(template) {
            var len = people.length,
                $div = $('<div/>');

            // takes the handlebars generated html and adds is to the div
            // then add event to the div for click on its every item
            var peopleTemplate = Handlebars.compile(template);
            var peopleHtml = peopleTemplate({ people: people });
            $div.append(peopleHtml);

            $div.on('click', '.person-item', function () {

                var $divTarget = $(this),
                    $divItems = $('.person-item');

                for (var i = 0; i < len; i++) {
                    if ($($divItems[i]).css('display') == 'none') {
                        $($divItems[i]).css('display', 'block');
                    } else {
                        $($divItems[i]).css('display', 'none');
                    }
                }

                $divTarget.css('display', 'block');
            });

            return $div;
        }

        return { render: render };
    }

    return { ComboBox: ComboBox };
}());
