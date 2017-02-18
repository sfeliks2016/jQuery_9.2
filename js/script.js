// Manipulacja DOM-em za pomocą jQuery
// zad.9.2

//1. zmiana koloru na czerwony wszystkich parzystych elementów span,
//2. dodanie do każdego paaragrafu przycisku z atrybutem data-tmp,
//3 po nacisnieciu przycisku wyswietli sie alert z zawartoscią atrybutu data-tmp

$(document).ready(function(){
    
    // metoda 1 z funkcja if()
    /*
    $('span').each(function(index,element){
        console.log(index);
        
        if(index % 2 == 0){   
            $(element).css('color', 'red');
        }
    });
    */
    
    // metoda 2 - lepsza!
    
    $('span:even').css('color', 'red'); // metoda 2
    
    var paragraphs = $('p');
    paragraphs.each(function(index, element){
        
          var button = '<button class="btn btn-info" data-tmp="'+ index +'">Click me</button>'
            $(element).append(button);
           
        });
    }); 

// dodanie event handlera. 
// wyswietlenie zawartosci atrybutu data-tmp

$(document).ready(function(){
     $('button').click(function(){
            alert(($(this).attr('data-tmp')));
     });
});