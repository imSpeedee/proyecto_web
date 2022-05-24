//  NOM 
var nom=new LiveValidation('nom-input'); 
nom.add(Validate.Presence); 
nom.add(Validate.Length, {minimum: 3, maximum: 10}); 

//  EDAT 
var edat=new LiveValidation('edat-input');
edat.add(Validate.Presence);
edat.add(Validate.Numericality, {minimum: 15, maximum: 30, onlyInteger:true}); 

//  EMAIL 
var email=new LiveValidation('correu-input');
email.add(Validate.Presence);
email.add(Validate.Email); 

//  CONTRASENYA 
var contrasenya=new LiveValidation('pass-input');
contrasenya.add(Validate.Presence);
contrasenya.add(Validate.Length, {minimum: 3, maximum: 15});

//  CONFIRMAR CONTRASENYA 
var verifyPass=new LiveValidation('verifyPass-input');
verifyPass.add(Validate.Presence);
verifyPass.add(Validate.Confirmation, {match: 'pass-input'});

//  IDIOMA 
var idioma=new LiveValidation('selectIdioma-input');
idioma.add(Validate.Exclusion, {within: ['0'], failureMessage:"Manca selecCionar un idioma!"});

//  ACCEPTAR CONDICIONS 
var acceptar=new LiveValidation('accept-input');
acceptar.add(Validate.Acceptance);

//-------------FOMRULARIO REGISTRO----------------

//  NOM 
var nom2=new LiveValidation('nom2-input'); 
nom2.add(Validate.Presence); 
nom2.add(Validate.Length, {minimum: 3, maximum: 15}); 

//  COGNOMS 
var cognoms2=new LiveValidation('cognoms2-input'); 
cognoms2.add(Validate.Presence); 
cognoms2.add(Validate.Length, {minimum: 10, maximum: 30}); 

//  SEXE 
var selectSexe=new LiveValidation('selectSexe-input');
selectSexe.add(Validate.Exclusion, {within: ['0'], failureMessage:"Manca selecCionar un sexe!"});

//  EMAIL 
var correu2=new LiveValidation('correu2-input');
correu2.add(Validate.Presence);
correu2.add(Validate.Email); 

//  POBLACIO 
var selectPoblacio=new LiveValidation('selectPoblacio-input');
selectPoblacio.add(Validate.Exclusion, {within: ['0'], failureMessage:"Manca selecCionar un sexe!"});

//  DESCRIPCIO 
var desc=new LiveValidation('desc-input'); 
desc.add(Validate.Presence); 
desc.add(Validate.Length, {minimum: 10}); 

//  ACCEPTAR NOVETATS 
var novetats=new LiveValidation('novetats-input');
novetats.add(Validate.Acceptance);

//  ACCEPTAR CONDICIONS 
var cond=new LiveValidation('cond-input');
cond.add(Validate.Acceptance);


function btnEnviarEnable(){
    if(document.getElementById("novetats-input").checked && document.getElementById("cond-input").checked){
        document.getElementById("btnEnviar").disabled = false;
    }
}