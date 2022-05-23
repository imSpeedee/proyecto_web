// ******* NOM ***********
var nom=new LiveValidation('name-input');
nom.add(Validate.Presence);
nom.add(Validate.Length, {minimum: 3, maximum: 10});

// ******* EDAT ***********
var edat=new LiveValidation('edat-input');
edat.add(Validate.Presence);
edat.add(Validate.Numericality, {minimum: 1, maximum: 30, onlyInteger:true});

// ******* EMAIL ***********

var email=new LiveValidation('email-input');
email.add(Validate.Presence);
email.add(Validate.Email);

// ******* CONTRASENYA ***********

var contrasenya=new LiveValidation('pass-input');

contrasenya.add(Validate.Presence);
contrasenya.add(Validate.Length, {minimum: 5, maximum: 10});

// ******* CONFIRMAR CONTRASENYA ***********

var conf_contra=new LiveValidation('confpass-input');

conf_contra.add(Validate.Presence);
conf_contra.add(Validate.Confirmation, {match: 'pass-input'});

// ******* IDIOMA ***********

var idioma=new LiveValidation('select-input');
idioma.add(Validate.Exclusion, {within: ['0'], failureMessage:"Selecciona un valor!"});

// ******* ACCEPTAR CONDICIONS ***********

var acceptar=new LiveValidation('accept-input');
acceptar.add(Validate.Acceptance);                  