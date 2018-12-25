
//jQuery conversion 
$('#button').click(function calculate(){
  console.log('creating variable for user input for text')
  var bill = $("input[type='text']").val();
  console.log(Number(bill));
  var numberOfPercent = $("input[type='number']").val();
  console.log('creating total');
  var total = Number(bill) * (Number(numberOfPercent) / 100) + Number(bill);
$('#result').text('$'+ total.toFixed(2))
})


