function slider() {
    var swiper = new Swiper('.feedback .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        pagination: {
            el: '.feedback .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 5,
                centeredSlides: true,
            },
        }
    })
}

$(document).ready(function() {
    $(".select").niceSelect()

    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(".tab-content").removeClass("tab-content--active")
        $(`.tab-content[data-tab-path="${path}"]`).addClass("tab-content--active")
    })

    $(".modal__form-group--min input").keypress(function(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    })
})