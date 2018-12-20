let monTitre = document.querySelector('h1');
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
    document.body.style.backgroundColor = "#800080";
  /*  document.body.style.backgroundImage = "url('img/fond.jpg')";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundPosition = "center";
    document.body.style.background = "#800080";*/

  }else {
    backgroundBtn.textContent ="mode psychédelique";
    document.body.style.backgroundColor="#000000";
  }



});

/*document.querySelector('html').addEventListener('click',function(){
  alert( "arrête de cliquer");
});
*/
