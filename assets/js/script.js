function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function () {

    if (visible($('.count-digit'))) {
        if ($('.count-digit').hasClass('counter-loaded')) return;
        $('.count-digit').addClass('counter-loaded');

        $('.count-digit').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 7000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
})



// Package Toggler
function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");

    for (var i = 0; i < text2.length; i++) {
        if (checkBox.checked == true) {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        } else if (checkBox.checked == false) {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        }
    }
}
check();


var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    gap: "30px",
    padding: '1rem',
    pagination: false,
    arrows: false,
    breakpoints: {
        350: { perPage: 1, gap: '1rem' },
    },
});

splide.mount();

