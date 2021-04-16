$(function () {
    $("#nama").load("test.txt");
});

$(function (){
    let url = "https://image.freepik.com/free-icon/wordpress-logo_318-9854.jpg";
    $("#getPost".on("click", function(){
        $.ajax({
            url: url,
            type: 'GET',
            success: function (data) { 
                let data_html = '';
                $.each(data, function (i, item) { 
                    data_html +=
                    '<cbr>' +
                    '<img src ="' + item.thumnailUrl + '" alt="" >' +
                    '<cbr>' +
                    '<h1>' + item.id + '.' + item.title + '</h1>'
                });
                $("#data_hasil_dari_internet").html(data_html);
            }, 
            error: function(error) {
                console.log(error);
            }
        });
    });
});