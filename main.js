// Esercizio di oggi: creare una griglia formata da 6x6 quadratini (anche in html va bene). Ad ogni click su un quadratino parte una chiamata AJAX all'API boolean
// https://flynn.boolean.careers/exercises/api/random/int
// che restituisce un numero intero.
// A seconda del valore restituito dall'API bisogna colorare il quadratino su cui si è cliccato, secondo queste regole:
// se il numero restituito dalle API è <= 5, il quadratino diventa giallo
// se il numero restituito dalle API è > 5, il quadratino diventa verde
// Nome repo: js-jq-ajax-grigliaquad
// Buon lavoro!

// vorrei creare il tutto utilizzando handlebars, veidamo cosa succede
// uso un ciclo for per assicurarmi che la cosa avvenga 6 volte
// vorrei che creaase 6 righe
for (var i = 0; i < 6; i++) {
    // a ogni ciclo:
    // recupero il template per quella che sarà la mia row
    var template_html = $('#templateRow').html();
    // compilo il template con la funzione specifica di Handlebars
    var template_function = Handlebars.compile(template_html);
    // creo l'oggetto con le proprietà che mi interesseranno
    var properties = {
        'main': 'row',
        'sons': 'square'
    };
    // do il mio oggetto in pasto alla funzione
    var final = template_function(properties);
    // lo appendo al container
    $('.container').append(final);
    // appende una row e riparte un nuovo ciclo
};

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
