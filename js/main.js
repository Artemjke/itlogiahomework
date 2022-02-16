$(document).ready(() =>{

    $('.image-link').magnificPopup({type:'image'});

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    };
    document.querySelectorAll('#menu > *').forEach((item) => {
        item.addEventListener('click', () => {
            document.getElementById('menu').classList.remove('open');
        })
    })


    $('.img-popup-link').magnificPopup({
        type: 'image'
        // other options
    });


    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });



})