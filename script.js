$(document).ready(function(){

  var clicks = 0;
  $('#generateButton').on('click', function(){
    clicks +=1;
    $('body').append('<div class=red><p>'+ clicks +"</p><button class='swapButton'>Swap</button><button class='deleteButton'>Delete</button></div>");
  });//end generateButton
  $('body').on('click', '.swapButton',function(){
    if($(this).parent().hasClass('red')){
      $(this).parent().addClass('yellow');
      $(this).parent().removeClass('red');
    }//end red check
    else if($(this).parent().hasClass('yellow')){
      $(this).parent().addClass('red');
      $(this).parent().removeClass('yellow');
    }//end yellow check
  });//end on clickSwap
  $('body').on('click', '.deleteButton',function(){
      $(this).parent().hide();
  });//end deleteButton
});//end on ready
