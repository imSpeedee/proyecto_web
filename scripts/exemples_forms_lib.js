/*

Estas variables y funciones solo se pueden utilziar si se estra utilizando la libreria LIVEVALIDATION

No se puede utilizar esta libreria con Radio Buttons

*/

// ******* NOM ***********
var nom=new LiveValidation('name-input'); //ID del campo al que queremos ahcer la validacion
nom.add(Validate.Presence); //El Presence comproba que no se un valor nulo, vacio o no definido
nom.add(Validate.Length, {minimum: 3, maximum: 10}); //En este caso comprueba que la longitud del campo sea de mini 3 char a maximo 10 char

// ******* EDAT ***********
var edat=new LiveValidation('edat-input');
edat.add(Validate.Presence);
edat.add(Validate.Numericality, {minimum: 1, maximum: 30, onlyInteger:true}); //Campo numerico de entre el numero 1 i 30 de valor integer obligatorio

// ******* EMAIL ***********

var email=new LiveValidation('email-input');
email.add(Validate.Presence);
email.add(Validate.Email); //Valida que el valor de este campo sea un correo electronico

// ******* CONTRASENYA ***********

var contrasenya=new LiveValidation('pass-input');

contrasenya.add(Validate.Presence);
contrasenya.add(Validate.Length, {minimum: 5, maximum: 10});

// ******* CONFIRMAR CONTRASENYA ***********

var conf_contra=new LiveValidation('confpass-input');

conf_contra.add(Validate.Presence);
conf_contra.add(Validate.Confirmation, {match: 'pass-input'}); //Comprueba que este campo sea igual a otro(id del otro campo)

// ******* IDIOMA ***********

var idioma=new LiveValidation('select-input');
idioma.add(Validate.Exclusion, {within: ['0'], failureMessage:"Selecciona un valor!"}); //Within es para especificar en que campo a de dar fallo,
                                                                                        //el segundo campo es para poner que mensaje a de salir en caso de fallo

// ******* ACCEPTAR CONDICIONS ***********

var acceptar=new LiveValidation('accept-input');
acceptar.add(Validate.Acceptance); //Comprueba si este campo esta seleccionado