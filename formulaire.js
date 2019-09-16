var app = {

    init: function () {

        // getElementById permet de parcourir dans le fichier html et chercher l'element qui a l'id nom
        // addEventListener permet d'écouter ce qui se passe dans l'input paraport à la fonction validatename
        document.getElementById('nom').addEventListener('blur', validateName);

        document.getElementById('telephone').addEventListener('blur', validateTel);

        document.getElementById('mail').addEventListener('blur', validateMail);

        document.getElementById('inscription').addEventListener('submit', validateForm);

        validateForm();

    }
}


var model = {
    nom: undefined,
    telephone: undefined,
    mail: undefined,

    isValid: function () {
        return this.nom;
        return this.telephone;
        return this.mail;
    }
}

function validateForm() {
    var submit = document.getElementById('submit');

    if (model.isValid()) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }


}

// on a créer une variable erreur qui va permettre de renvoyer un message d'erreur
var erreur;
//  Name validate function
function validateName(e) {
    var regexName = /[A-Z]{1}[a-z]{1,}/;
    erreur = '';

    //e.target.value
    //The target event property returns the element that triggered the event.
    //The target property gets the element on which the event originally occurred
    // It allows us to add an event listener to one parent, and avoid to add many event listeners to specific nodes.
    //regexName : Regular expressions : are patterns used to match character combinations in strings.


    if (regexName.test(e.target.value)) {
        document.getElementById('aideNom').textContent = erreur;
        e.target.classList.remove('erreur');
        model.nom = e.target.value;


        // Si la valeur du nom qu'on va rentrer ne respecte pas notre regexName, dans ce cas là le champs de l'input va devenir rouge
        // et on va afficher un petit message qui montre que la valeur n'est pas bonne
    } else if (!regexName.test(e.target.value)) {
        erreur = "Vous n'avez pas le bon format de nom";
        document.getElementById('aideNom').textContent = erreur;
        document.getElementById("submit").disabled = true;
        e.target.classList.add('erreur');
        model.nom = undefined;
    }

    validateForm();
}

//tel validate funciton
function validateTel(e) {
    var regexTel = /[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}/;
    erreur = '';
    if (regexTel.test(e.target.value)) {
        document.getElementById('aideTel').textContent = erreur;
        document.getElementById("submit").disabled = false;
        e.target.classList.remove('erreur')
        model.telephone = e.target.value;


    } else if (!regexTel.test(e.target.value)) {
        console.log(e.target.value.length);
        erreur = "Vous n'avez pas le bon format de numero";
        document.getElementById('aideTel').textContent = erreur;
        document.getElementById("submit").disabled = true;
        e.target.classList.add('erreur')
        model.telephone = undefined;

    }
}

//mail validate function
function validateMail(e) {
    var regexEmail = /.+@.+\..+/;
    erreur = '';
    if (regexEmail.test(e.target.value)) {

        document.getElementById('aideMail').textContent = erreur;
        document.getElementById("submit").disabled = false;
        e.target.classList.remove('erreur')
        model.mail = e.target.value;

    } else if (!regexEmail.test(e.target.value)) {
        erreur = 'Vous n avez pas le bon format d email';
        document.getElementById('aideMail').textContent = erreur;
        document.getElementById("submit").disabled = true;
        e.target.classList.add('erreur')
        model.mail = undefined;
    }

}

// on a créer un bouton reset qui permet de réinitialiser le formulaire à n'importe quel moment
function reset() {
    var input = document.getElementsByTagName('input');

    var count = input.length;

    for (i = 0; i < count; i++) {
        input[0].remove();
    }
}

