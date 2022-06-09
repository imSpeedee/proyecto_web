// ******* NOM ***********
var nom=new LiveValidation('nombre-input');
nom.add(Validate.Presence);
nom.add(Validate.Length, {minimum: 2, maximum: 15});

// ******* EDAT ***********
var edat=new LiveValidation('edat-input');
edat.add(Validate.Presence);
edat.add(Validate.Numericality, {minimum: 18, maximum: 25, onlyInteger:true});

// ******* EMAIL ***********
var email=new LiveValidation('email-input');
email.add(Validate.Presence);
email.add(Validate.Email);               