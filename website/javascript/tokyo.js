document.getElementById("opennav").addEventListener("click",function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  })

document.getElementById("closebtn").addEventListener("click",function(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
})

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'swiper'
    let swiperContainers = document.querySelectorAll('.swiper');

    // Loop through each swiper container
    swiperContainers.forEach(function(container) {
        let swiperCards = new Swiper(container.querySelector('.card__content'), {
            loop: true,
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
