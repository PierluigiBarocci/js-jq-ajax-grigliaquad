// Esercizio di oggi: creare una griglia formata da 6x6 quadratini (anche in html va bene). Ad ogni click su un quadratino parte una chiamata AJAX all'API boolean
// https://flynn.boolean.careers/exercises/api/random/int
// che restituisce un numero intero.
// A seconda del valore restituito dall'API bisogna colorare il quadratino su cui si è cliccato, secondo queste regole:
// se il numero restituito dalle API è <= 5, il quadratino diventa giallo
// se il numero restituito dalle API è > 5, il quadratino diventa verde
// Nome repo: js-jq-ajax-grigliaquad
// Buon lavoro!

// intercettare il click su quadratino
$('.square').click(function(){
    // inziamo portandoci dietro questo quadratino
    var that = $(this);
    // chiamata all'API boolean
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success': function(data){
            var ranNum = data.response;
            myColoring(ranNum, that);
        },
        'error': function(){
            alert('Ops, c\'è un errore');
        },
    });
});


// funzione da inserire nella chiamata AJAX

function myColoring (a, subject) {
    if (a <= 5) {
        subject.addClass('yellow');
    } else {
        subject.addClass('green');
    }
    subject.text(a);
}
