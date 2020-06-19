function load_blogs() {
    $("#pages-placeholder").load("../../Pages/Site/blogs.html");
}
function load_home() {
    $("#pages-placeholder").load("../../Pages/Site/home.html");
    $('.nav .nav-link').click(function () {
        $('.nav .nav-link').removeClass('active');
        $(this).addClass('active');
    })
    
}
function load_contact() {
    $("#pages-placeholder").load("../../Pages/Site/contact.html");
}
function load_feedback() {
    $("#pages-placeholder").load("../../Pages/Site/feedback.html");
}
function load_experience() {
    $("#pages-placeholder").load("../../Pages/Site/experience.html");
}






