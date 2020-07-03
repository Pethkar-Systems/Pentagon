function render(data) {
    var html = "<div class='dynamic-feedback-div'><div class='feedback-name-div'> " + data.name + "</div> <div class='feedback-email-div'>" + data.email + "</div><div class='feedback-content-div'>" + data.body+"</div></div> ";
    $('#FeedbackDynamicText').append(html);
}

var coment = [
    { "name": "Akash Varude","email":"asvarude@mitaoe.ac.in","body":"This is amazing" }
    ];
for (var i = 0; i < coment.length; i++) {
    render(coment[i]);
}
function displayComent() {
    var addObj = {
        "name": $('#names').val(),
        "email": $('#email').val(),
        "body": $('#body').val()
    };
    console.log(addObj);
    coment.push(addObj);
    render(addObj);
}

