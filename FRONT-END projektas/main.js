
var burgerdiv = document.querySelector('.left_menu_bar');
var saugiklis = true;

function burger(){
    if(saugiklis){
        burgerdiv.classList.add('overlay');
        saugiklis = false;
        console.log(burgerdiv);
    }else{
    burgerdiv.classList.remove('overlay');
    saugiklis = true;
    console.log(burgerdiv);
}
}

$( document ).ready(function() {

    //-----------------------------------------------------BUTTON TO TOP START
    
    $("a.toTop").click(function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate ({
            scrollTop: $(href).offset().top
        }, 1000);
    });

    window.onscroll = function() {myFunction()};
    function myFunction() {
        var rodykle = $('.toTop i');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        rodykle.css('opacity', 1)
    } else {
        rodykle.css('opacity', 0)
    };
  }

 // --------------------------------------------------------BUTTON TO TOP END

  //---------------------------------------------SLIDE SHOW START

  $('.vietos_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:2000,
    dots: true,
    responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
      ]
});



//---------------------------------------SLIDE SHOW END

// ------------------------------GALERIJOS PARAMETRAI START!!!!!

lightGallery(document.getElementById('photo_gallery'), {
    mode: 'lg-fade',
    cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)'
}); 

// ---------------------------------- GALERIJOS PRAMETRAI END!!


new WOW().init();
});

