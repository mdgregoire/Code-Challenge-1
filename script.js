console.log('js');
$(document).ready(function(){
console.log("JQ");

var clicks = 0;
$('#generateButton').on('click', function(){
  console.log('inclick');
  clicks +=1;
  $('body').append('<div><p>'+ clicks +"</p><button id='swapButton'>Swap</button><button id='deleteButton'>Delete</button></div>");
});
});//end on click
