
var tekstas = document.querySelector('.right_side h2');

var $grid = $('.filtras').isotope({

  });
  // filter items on button click
  $('.kategorija').on( 'click', 'p', function() {
    tekstas.innerHTML = $(this).text();
    $('.kategorija p').removeClass('active');   
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

var isskleisti_kataloga = document.querySelector('.isskleidziamas_katalogas');

function small_screen(){
    isskleisti_kataloga.classList.toggle('isskleisti');
    console.log(isskleisti_kataloga);
}

var burgerdiv = document.querySelector('.left_menu_bar');

function burger(){
    burgerdiv.classList.toggle('overlay');

}
