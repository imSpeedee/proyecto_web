// ******* NOM ***********
//Comprobamos que el nombre no este vacio y tenga una longitud minima de 10 y maxima de 50 caracteres
var nom=new LiveValidation('nombre-input');
nom.add(Validate.Presence);
nom.add(Validate.Length, {minimum: 10, maximum: 50});

// ******* TELEFON ***********
//Comprobamos que el telefono no este vacio, sea unnumero integer y tenga la longitud aduqada de 9 digitos
var telefon=new LiveValidation('telefon-input');
telefon.add(Validate.Presence);
telefon.add(Validate.Numericality, {onlyInteger:true});
telefon.add(Validate.Length, {minimum: 9, maximum: 9});

// ******* EMAIL ***********
//Comprobamosque el correo no este vacio y que sea una direccion de correo
var email=new LiveValidation('email-input');
email.add(Validate.Presence);
email.add(Validate.Email);

// ******* CONTRASENYA ***********
//Comprobamosque la contraseña no este vacia y tenga una longitud minima de 5 y maxima de 15 caracteres
var contrasenya=new LiveValidation('pass-input');
contrasenya.add(Validate.Presence);
contrasenya.add(Validate.Length, {minimum: 5, maximum: 15});

// ******* CONFIRMAR CONTRASENYA ***********
//Comprobamos que la confimracion de la contraseña sea identica a la contraseña de antes
var conf_contra=new LiveValidation('passConf-input');
conf_contra.add(Validate.Presence);
conf_contra.add(Validate.Confirmation, {match: 'pass-input'});

// ******* POBLACIO ***********
//Comprobamos que el usuario escoja una de las poblaciones de la lista
var poblacio=new LiveValidation('poblacio-input');
poblacio.add(Validate.Exclusion, {within: ['0'], failureMessage:"Selecciona una poblacio!"});