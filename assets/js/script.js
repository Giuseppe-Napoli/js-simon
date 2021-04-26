$(function(){

  /*   1. Clccando su “via” il computer genera 5 numeri
       2. Vengono mostrati per 5 secondi i numeri generati
       3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
       5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!” */

  //creo tre array vuote     
  var arrGen = []; //array generata in maniera random
  var arrUtente = []; //array cin valori numeri inseriti dall'utente
  var arrResult = []; //i questa array verranno inseriti gli elementi comuni delle prime due array
  $('#restart').hide();
  reset();
 // al click del btn inizierà un ciclo che prevede il push di 5 numeri random generati dalla funzione
  $('#btn').click(function(){
    while(arrGen.length < 5){
      arrGen.push(randomNumber(1,100));
    };
    $('#btn').hide()
    // i numeri random verranno stampati a schermo e mostrati per 5 secondi
    printOutput(arrGen.toString(),'#display')
    setTimeout(function(){
      printOutput("Digita i numeri che hai appena letto", '#display');
      $('#cmd-input').show()
    },5000)
  })

   // al click del btn-invia, tramite varie condizioni verranno inseriti dall'utente 5 numeri e pushati nell array vuoto
  $('#btn-invia').click(function(){
    var number = $('#nUtente').val();
    console.log($('#nUtente').val());
    
    if(number > 100 ){
      alert('ATTENZIONE, Assicurati che il numero inserito non sia superiore a 100')
    }else if( arrUtente.includes((parseInt(number)))){
      alert('ATTENZIONE, hai già inserito questo numero')
    }else{
      $('#nUtente').val('');
      arrUtente.push(parseInt(number));
      // quando la lunghezza dell'array sarà di 5 numeri allora verificheremo quali elementi sono in comune
      if (arrUtente.length === 5) {
        $('#cmd-input').hide();
        printOutput('Calcolo in corso...', '#display');
        for (var i = 0; i < arrUtente.length; i++) {
          if(arrGen.includes(arrUtente[i])) {
            arrResult.push(arrUtente[i]);
          };
        };
        //in base alla lunghezza della nuova array, che accomuna i valori uguali delle prime due array, sapremo quanti numeri sono stati indovinati 
        setTimeout(function(){
          if(arrResult.length === 0){
           printOutput('Peccato,non hai indovinato alcun numero', '#display');
          }else if(arrResult.length === 5){
            printOutput('CONGRATULAZIONI! Hai ricordato tutti i numeri: ' + arrResult.join(', ')  , '#display');
          }else{
            printOutput('Hai indovinato ' + arrResult.length + ' numeri: ' + arrResult.join(',  ') +  '.  Puoi fare ancora meglio. Ritenta!', '#display');
          }
          $('#restart').show();
        }, 3000);
      }
    }
  });
  
  //resettiamo il gioco (parametro da controllare perchè non funzionante correttamente)
  $('#restart').click(function(){
    reset();
  });
  
});

// FUNZIONI
function reset(){
  printOutput("Sei pronto? Clicca su 'Via'", '#display');
  $('#btn').show();
  $('#cmd-input').hide()
  $('#restart').hide();
};

function randomNumber(max,min){
  return Math.floor(Math.random()*(max - min + 1)+min);
};

function printOutput(text,target){
 $(target).text(text);
};

