window.onload = function(){
    $('.container').addClass('hidden');

    // Oculta el loader y luego muestra el contenido del .container
    $('#page').fadeOut(1500, function() {
        $('.container').removeClass('hidden');
    });
}