
function sendEmail() {
    debugger;
    $.ajax({
        url: "mail.php",
        type: 'GET',
        success: function (data) {
            console.log(data);
        }, error: function (e) {
            console.log(e);
        }
    });
}

function sendEmail2() {
    var name = $('#name')[0].value;
    var email = $('#email')[0].value;
    var phone = $('#phone')[0].value;
    var body = $('#body')[0].value;
    var data = {
        name: name,
        email: email,
        phone: phone,
        body: body
    };
    if (isNotEmpty(name, email, phone, body)) {
        $.ajax({
            url: '../../Pages/Shared/mail.php',
            type: 'POST',
            data: data,
            success: function (response) {
                console.log(response);
            }, error: function (e) {
                console.log(e);
            }
        });
    }
}
function isNotEmpty(name, email, phone, body) {
    debugger
    if (name != "" && email != "" && phone != "" && body != "") {

        return true;
    } else {
        console.log('some fields are empty');
        return false
    }
}
