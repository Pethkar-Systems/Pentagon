<div class="contact-container">
    <div class="form-container">
        <p class="contactus-heading">Contact us</p>
        <div class="inner-form-container">
            <div class=" form-row "><input type="text" id="name" class="contact-form-text" placeholder="Your Name here" name="name" /></div>
            <div class="form-row"><input type="email" id="email" class="contact-form-text" placeholder="Email" name="email" /></div>
            <div class=" form-row"><input type="text" id="phone" class="contact-form-text" placeholder="Phone Number" name="phone" /></div>
            <div class="form-row"><textarea class="contact-form-text" id="body" placeholder="your message here" name="message"></textarea></div>
            <div class="form-row buttons">
                <input type="submit" onclick="sendEmail()" name="btn-send" class="send-btn contact-form-btn" value="send" />
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
function sendEmail() {  
    var name = $('#name')[0].value;
    var email = $('#email')[0].value;
    var phone = $('#phone')[0].value;
    var body = $('#body')[0].value;
   
    if (isNotEmpty(name, email, phone, body)) {
        debugger;
        $.ajax({
            url: 'mail.php',
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
</script>








