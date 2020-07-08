function sendEmail() {
    var name = $('#name')[0].value;
    var email = $('#email')[0].value;
    var phone = $('#phone')[0].value;
    var body = $('#body')[0].value;
   
    if (isNotEmpty(name, email, phone, body)) {
        debugger;
        $.ajax({
            url: "/Pages/Site/mail.php",
            type: 'POST',
            name: name,
            email: email,
            phone: phone,
            body: body,
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
