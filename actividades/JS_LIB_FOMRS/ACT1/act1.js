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
var conf_contra=new LiveValidation('verifyPass-input');
conf_contra.add(Validate.Presence);
conf_contra.add(Validate.Confirmation, {match: 'pass-input'});

//  IDIOMA 
var idioma=new LiveValidation('selectIdioma-input');
idioma.add(Validate.Exclusion, {within: ['0'], failureMessage:"Manca selecCionar un idioma!"});

//  ACCEPTAR CONDICIONS 
var acceptar=new LiveValidation('accept-input');
acceptar.add(Validate.Acceptance);

//-------------FOMRULARIO REGISTRO----------------

//  NOM 
var nom=new LiveValidation('nom2-input'); 
nom.add(Validate.Presence); 
nom.add(Validate.Length, {minimum: 3, maximum: 15}); 

//  COGNOMS 
var nom=new LiveValidation('cognoms2-input'); 
nom.add(Validate.Presence); 
nom.add(Validate.Length, {minimum: 10, maximum: 30}); 

//  SEXE 
var idioma=new LiveValidation('selectSexe-input');
idioma.add(Validate.Exclusion, {within: ['0'], failureMessage:"Manca selecCionar un sexe!"});

//  EMAIL 
var email=new LiveValidation('correu2-input');
email.add(Validate.Presence);
email.add(Validate.Email); 

//  POBLACIO 
var idioma=new LiveValidation('selectPoblacio-input');
idioma.add(Validate.Exclusion, {within: ['0'], failureMessage:"Manca selecCionar un sexe!"});

//  DESCRIPCIO 
var nom=new LiveValidation('desc-input'); 
nom.add(Validate.Presence); 
nom.add(Validate.Length, {minimum: 10}); 

//  ACCEPTAR CONDICIONS 
var acceptar=new LiveValidation('cond-input');
acceptar.add(Validate.Acceptance);