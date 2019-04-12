var stepTrigger = document.querySelectorAll('.step-trigger');
var stepText = document.querySelectorAll('.step-text');
var arrR = document.querySelector('.arrow-r');
var arrL = document.querySelector('.arrow-l');

/*########### GUIA PRACTICA #########*/

for(let i=0; i<stepTrigger.length; i++){
    stepTrigger[i].addEventListener('click', function(){
        stepText[i].classList.toggle('display');
    });
}

/*############## MANUAL #############*/

$(window).ready(function() {
    $('#manual').turn({
                        display: 'double',
                        acceleration: true,
                        gradients: !$.isTouch,
                        elevation:50,
                        when: {
                            turned: function(e, page) {
                                /*console.log('Current view: ', $(this).turn('view'));*/
                            }
                        }
                    });
});


$(window).bind('keydown', function(e){
    
    if (e.keyCode==37)
        $('#manual').turn('previous');
    else if (e.keyCode==39)
        $('#manual').turn('next');
        
});

arrL.addEventListener('click', function(){
    $('#manual').turn('previous');
});

arrR.addEventListener('click', function(){
    $('#manual').turn('next');
});


/*############## TARJETAS #############*/

var card = document.querySelectorAll('.card');

for(let i=0; i<card.length; i++){
    card[i].addEventListener('click', function(){
        card[i].classList.toggle('is-flipped');
    });
}


/*################## WOW #############*/

$(function(){
new WOW().init(); 

});
