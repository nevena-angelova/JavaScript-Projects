(function () {
    'use strict';

    require.config({
        paths: {
            "jquery": "libs/jquery-1.11.1.min",
            "handlebars": "libs/handlebars-v1.3.0"
        }
    });

    require(["jquery", "controls", "people", "container"], function ($, controls, people, container) {

        var comboBox = controls.ComboBox(people);
        var template = $("#person-template").html();
        var comboBoxHtml = comboBox.render(template);
        container.html(comboBoxHtml);
    });

}());




