function tabsSlider() {
    var swiper = new Swiper('.all-stream__tabs .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 12,
    })
}

$(document).ready(function() {
    $(".select").niceSelect()
    tabsSlider()

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