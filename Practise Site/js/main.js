$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    margin: 2,
    responsiveClass: true,
    responsiveRefreshRate: 50,
    responsive: {
        320: {
            items: 1,
            nav: false
        },
        480: {
            items: 2,
            nav: false
        },
        768: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: true
        },
        1200: {
            items: 5,
            nav: false,
            loop: true
        }
    }
})

function openbox(box) {
    var display = document.getElementById(box).style.display;

    if (display == "none") {
        document.getElementById(box).style.display = "block";
    } else {
        document.getElementById(box).style.display = "none";

    }
}
var dis = 1;

function seticon(colls) {
    if (dis == 1) {
        document.getElementById(colls).src = "img/minus.png";

        dis = 0;
    } else {
        document.getElementById(colls).src = "img/plus.png";
        dis = 1;
    }
}

let form = document.getElementById('contact_form');
let button = document.getElementById('clear');
button.addEventListener('click', () => form.reset());