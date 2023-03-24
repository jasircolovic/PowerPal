$('.button').click(function(e) {
    var index = $('.button').index( this );
    e.preventDefault();
    var elementi=document.getElementsByClassName("detail");
    elementi[index].classList.toggle("open");
  });
  $('.close').click(function(e) {
    var index = $('.close').index( this );
    e.preventDefault();
    var elementi=document.getElementsByClassName("detail");
    elementi[index].classList.remove("open");
  });