$(document).ready(function(){

    var root = document.documentElement.style;

    $('.tab1').click(function(){
        $('.tab1').addClass('tab_active');
        $('.tab2').removeClass('tab_active');

        $(".tab_highl").removeClass('tab_highl_ra');
        $(".tab_highl").addClass('tab_highl_la');

        $(".login_form").show();
        $(".signup_form").hide();

        root.setProperty('--signup_d', 'block');
        root.setProperty('--tabheigh', '330px');
    });
    $('.tab2').click(function(){
        $('.tab2').addClass('tab_active');
        $('.tab1').removeClass('tab_active');

        $(".tab_highl").removeClass('tab_highl_la');
        $(".tab_highl").addClass('tab_highl_ra');

        $(".login_form").hide();
        $(".signup_form").show();

        root.setProperty('--signup_d', 'none');
        root.setProperty('--tabheigh', '380px');
    });
})