(function () {

    var name,
        resourceUrl = 'http://crowd-chat.herokuapp.com/posts';

    while (!name) {
        name = prompt("Enter your name:");
    }

    $('#send-msg-btn').on('click', function () {
        var msg = $('#new-msg-tb').val(),
            data = { "user": name, "text": msg };
        sendMessage(data);
    });

    readAllMessages();

    function sendMessage(data) {
        return $.ajax({
            url: resourceUrl,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (data) {
                console.log("Message Added!");
            },
            error: function (err) {
                console.log("Error in sending message!");
            }
        });
    }

    function readAllMessages() {
        setInterval(function myfunction() {
            $.ajax({
                url: resourceUrl,
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {

                    console.log(data);

                    var $msgUl = $('<ul/>');
                    for (var i = 0, len = data.length; i < len; i += 1) {
                        $('<li/>').append($('<strong/ >').html(data[i].by + ': '))
                               .append($('<span/>').html(data[i].text))
                                .appendTo($msgUl);
                    }
                    $('#messages').html($msgUl);
                },
                error: function () {
                    console.log("Error in getting messages!");
                }
            });
        }, 2000)
    };

}).call(this);