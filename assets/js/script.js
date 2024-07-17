

$(document).ready(function(){

  


  $('.show').click(function(){
    $('.menu-area').addClass("show");
    $('ul').addClass('slider')
  })

  $('.hide').click(function(){
    $('.menu-area').removeClass("show");
    $('ul').removeClass('slider');
  })



})
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})