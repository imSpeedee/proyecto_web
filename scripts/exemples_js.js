function hello_world() {
    alert("HELLO WORLD!");
}

function suma(a,b) {
    return a+b;
}

function ex29() {
    num = prompt("Escrius un numero entre 10 i 20:");
    num = Number(num);

    if (num<=10 || num>=20) {
        alert("Numero no valid.");
    }else{
        alert("Numero valid.");
    }
}

function ex30() {
    nom = prompt("El teu nom:");
    edat = prompt("Escriu la teva edat:");
    edat = Number(edat);

    if (edat>=15 && edat<=21) {
        alert("Hola " + nom + " encara ets un nen.");
    }else if(edat>=15 && edat<=21){
        alert("Hola " + nom + " encara ets un jove adolescent.");
    }else if(edat>=22 && edat<=35){
        alert("Hola " + nom + " ets una persona jove.");
    }else if(edat>=36 && edat<=55){
        alert("Hola " + nom + " ja no ets tan jove.");
    }else if(edat>=56 && edat<=65){
        alert("Hola " + nom + " Ets una persona madura.");
    }else if(edat>=66 && edat<=99){
        alert("Hola " + nom + " ja ets de la tercera edat.");
    }else if(edat>=100 && edat<=130){
        alert("Hola " + nom + " felicitats, has arribat al centenari!");
    }else{
        alert("Hola " + nom + " crec que no m'estas enviant la teva edat.");
    }
}

function ex31(id){
    var num = prompt("Posa un numero de l'1 al 10");
    num = Number(num);
    var text = document.getElementById(id);

    if(num>10 || num<1){
        alert("Numero no valid");
    }else{
        text.innerHTML = "<p onclick='ex31()'>Click per veure exemple de bucle.</p>";
        text.innerHTML += "<h3>Resultats taula del " + num + "</h3>";
        for(i=0;i<11;i++){
            var linia = "<p>" + num + "x" + i + "=" + num*i + "</p>";
            text.innerHTML+=linia;
        }
    }
}

function ex32(id){
    var text = document.getElementById(id);
    var setmana = new Array("Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte","Diumenge");

    text.innerHTML+= "<br>";
    for(i in setmana){
        text.innerHTML+= setmana[i] + "<br>";
    }
}

function ex33(id){
    var text = document.getElementById(id);
    var cars = new Array("Mustang","Civic","Shelby");
    var i = 0;

    text.innerHTML+= "<br>";
    while(cars[i]){
        text.innerHTML+= cars[i] + "<br>";
        i++;
    }
}

function ex34(id){
    var text = document.getElementById(id);
    var valor = prompt("Ingresa un numero entre 1 i 5:");
    valor=parseInt(valor);

    text.innerHTML+= "<br>";

    switch(valor){
        case 1: text.innerHTML+= "u";
        break;
        case 2: text.innerHTML+= "dos";
        break;
        case 3: text.innerHTML+= "tres";
        break;
        case 4: text.innerHTML+= "quatre";
        break;
        case 5: text.innerHTML+= "cinc";
        break;
        default: text.innerHTML+= "Has d'ingresar un numero entre 1 i 5.";
    }
}

function bodylightaqua(){
    document.body.style.backgroundColor = '#C0ECE4';
}

function elementlime(id){
    document.getElementById(id).style.backgroundColor = '#00FF4B';
}

function elementbigger(id){
    document.getElementById(id).style.width = '120px';
    document.getElementById(id).style.height = '60px';
}

function elementimg(id){
    document.getElementById(id).style.backgroundImage = "url('img/fotograma.png')";
}

function scull(){
    var llista = document.getElementById("colorsid");
    if(llista.selectedIndex == null || llista.selectedIndex == 0){
        alert("El formulari no ha estat enviat, Has d'escollir un color de la llista.");
        return false;
    }else{
        alert("El formulari ha estat enviat.");
    }
}

function act76(){
    setTimeout("alert('Mensage enviado pasado dos segundos.');",2000);
    //Tambien se pueden llamar funciones creadas por el usuario
    //setTimeout(funcion,2000);
}

function onloadHTML(){
    setTimeout("window.alert('Pareces interesado en esta pagina')",10000);
}

function act76_1(){
    alert("Ventana actividad 76");
}

function act80(){
    var val = document.getElementById('act80p').value;
    document.getElementById('act80p').value = parseInt(val)+1;
}


function letras_arcoiris(){
    var obj = document.getElementById('arcoiris');
    if(obj.style.color == 'green'){
            obj.style.color = 'lime';
    }else if(obj.style.color == 'lime'){
        obj.style.color = 'aqua';
    }else if(obj.style.color == 'aqua'){
        obj.style.color = 'blue';
    }else if(obj.style.color == 'blue'){
        obj.style.color = 'purple';
    }else if(obj.style.color == 'purple'){
        obj.style.color = 'pink';
    }else if(obj.style.color == 'pink'){
        obj.style.color = 'magenta';
    }else if(obj.style.color == 'magenta'){
        obj.style.color = 'red';
    }else if(obj.style.color == 'red'){
        obj.style.color = 'orange';
    }else if(obj.style.color == 'orange'){
        obj.style.color = 'yellow';
    }else{
        obj.style.color = 'green';
    }
}

function soloH4(id){
    var seccion = document.getElementById(id);
    //var titulos = seccion.getElementsByTagName("h4");
    var titulos = seccion.querySelectorAll("h4");

    titulos[0].style.color = "red";
    titulos[1].style.color = "red";
}

function soloP(id){
    var seccion = document.getElementById(id);
    var parrafos = seccion.getElementsByTagName("p");

    for(i=0;i<parrafos.length;i++){
        parrafos[i].style.color = "lime";
    }

    /* este solo pilla el primero de esa etiqueta
    
    seccion.querySelector("p").style.color = "lime";

    */

}

function soloP1(id){
    var seccion = document.getElementById(id);
    var parrafos = seccion.getElementsByClassName("p1");

    for(i=0;i<parrafos.length;i++){
        parrafos[i].style.color = "aqua";
    }
}



function cargar(){
    setInterval('letras_arcoiris()',500);



}