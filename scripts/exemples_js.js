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