$(document).ready(initialize);

function initialize(){

$('.operator').click(function(){

  var x = $('#first').val();
  var y = $('#second').val();
  x = parseFloat(x);
  y = parseFloat(y);
  var answer;

  if(this.id === 'multiply'){
    answer = x * y;
  }else if(this.id === 'add'){
    answer = x + y;
  }else if(this.id === 'subtract'){
    answer = x - y;
  }else{
    answer = x / y;
  }

  $('#answer').val(answer);

})

$('#clear').click(function(){
  $('#first').val('');
  $('#second').val('');
  $('#answer').val('');
})
}
