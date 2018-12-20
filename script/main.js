let monTitre = document.querySelectorAll('h1');
let paragraphe = document.querySelectorAll('psych') ;

monTitre.textContent = 'Hello world!';

setTimeout(popup,10000);

function popup(){


if (confirm('Souhaitez vous aller sur google.fr')) {
    window.location.href="https://www.google.fr";
} else {
    // Do nothing!
}

}

let backgroundBtn = document.querySelector('button');
backgroundBtn.textContent = "mode psychédelique";


document.querySelector('button').addEventListener('click',function(){

  if (backgroundBtn.textContent === "mode psychédelique"){
    backgroundBtn.textContent = "mode normal";
    document.body.style.backgroundColor = "#ff00ff";

    for (var i=0; i<1000; i++) {
     var elems=document.querySelectorAll("h1");
     if (elems.length>0) {
       for (var j=0; j<elems.length; j++) {
         elems[j].style.color="green";
         elems[j].style.fontFamily="'Comic Sans MS', Comic Sans, cursive";
       }
     }
    }

    for (var i=0; i<1000; i++) {
     var elems=document.querySelectorAll("p.psych");
     if (elems.length>0) {
       for (var j=0; j<elems.length; j++) {
         elems[j].style.color="blue";
         elems[j].style.fontFamily="'Papyrus',fantasy";
       }
     }
    }

  /*  document.body.style.backgroundImage = "url('img/fond.jpg')";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundPosition = "center";
    document.body.style.background = "#800080";*/

  }else {
    backgroundBtn.textContent ="mode psychédelique";
    document.body.style.backgroundColor="#000000";

    for (var i=0; i<1000; i++) {
     var elems=document.querySelectorAll("h1");
     if (elems.length>0) {
       for (var j=0; j<elems.length; j++) {
         elems[j].style.color="white";
         elems[j].style.fontFamily="Verdana";
       }
     }
    }

    for (var i=0; i<1000; i++) {
     var elems=document.querySelectorAll("p.psych");
     if (elems.length>0) {
       for (var j=0; j<elems.length; j++) {
         elems[j].style.color="white";
         elems[j].style.fontFamily="verdana";
       }
     }
    }
  }




});

/*document.querySelector('html').addEventListener('click',function(){
  alert( "arrête de cliquer");
});
*/
