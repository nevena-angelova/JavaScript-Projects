define(["jquery"], function () {
    var $divContainer = $('<div/>').attr('id', 'container');
    $('body').append($divContainer);

    return $divContainer;

});