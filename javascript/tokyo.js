
document.addEventListener('DOMContentLoaded', function() {
    // Function to open sidebar
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
        document.body.style.backgroundColor = "";
        // Slide content when sidebar is opened
        let contentSections = document.querySelectorAll('.container');
        contentSections.forEach(function(section) {
            section.style.marginRight = "250px";
        });

        document.querySelector('h1').style.marginRight = "250px";
    }

    // Function to close sidebar
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        document.body.style.backgroundColor = "";
        // Slide content back when sidebar is closed
        let contentSections = document.querySelectorAll('.container');
        contentSections.forEach(function(section) {
            section.style.marginRight = "0";
        });

        document.querySelector('h1').style.marginRight = "0";
    }

    // Event listeners to toggle sidebar
    document.getElementById("opennav").addEventListener("click", openNav);
    document.getElementById("closebtn").addEventListener("click", closeNav);
});

document.addEventListener('DOMContentLoaded', function() { 
    // Select all elements with the class 'swiper'
    let swiperContainers = document.querySelectorAll('.swiper');

    // Loop through each swiper container
    swiperContainers.forEach(function(container) {
        let swiperCards = new Swiper(container.querySelector('.card__content'), {
            loop: false,
            spaceBetween: 32,
            grabCursor: true,
          
            pagination: {
                el: container.querySelector('.swiper-pagination'),
                clickable: true, 
                dynamicBullets: true, 
            },
          
            navigation: {
                nextEl: container.querySelector('.swiper-button-next'),
                prevEl: container.querySelector('.swiper-button-prev'),
            },

            breakpoints: {
                600: {
                    slidesPerView: 2, 
                },
                968: {
                    slidesPerView: 3, 
                },
            },
        });
    });
});