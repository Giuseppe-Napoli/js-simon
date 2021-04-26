$(function(){

/*   1. Clccando su “via” il computer genera 5 numeri
  2. Vengono mostrati per 5 secondi i numeri generati
  3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
  5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!” */
  var arrGen = [];
  var arrUtente = [];

  reset();
  $('#btn').click(function(){
    while(arrGen.length < 5){
      arrGen.push(randomNumber(1,100));
    }
    console.log('ecco' + arrGen);
    $('#btn').hide()
    printOutput(arrGen.toString(),'#display')
    setTimeout(function(){
      printOutput("Digita i numeri che hai appena letto", '#display');
      $('#cmd-input').show()
    },2000)
    
  })

  $('#btn-invia').click(function(){
      var arrResult = [];
      var number = $('input').val();
      arrUtente.push(number);
      $('#nUtente').val('');
      if (arrUtente.length === 5) {
        printOutput('Calcolo in corso...', '#display');
        for (var i = 0; i < arrGen.length; i++) {
          if(arrGen.includes(arrUtente[i])) {
            arrResult.push(arrUtente[i]);
          }
        }
        console.log(arrResult + '---------------------------------');

     }
    });

      
    

  
  
});

function reset (){
  printOutput("Sei pronto? Clicca su 'Via'", '#display');
  $('#btn').show();
  $('#cmd-input').hide()
}

function randomNumber(max,min){
  return Math.floor(Math.random()*(max - min + 1)+min);
}

function printOutput(text,target){
 $(target).text(text);
} 