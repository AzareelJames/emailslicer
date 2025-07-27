document.title = `Email Slicer`;

const email = prompt(`Enter Email`);
const splited_email = email.split(`@`);
const username = splited_email[0];
const domain = splited_email[1];

var invalid = true;

if (!domain){
    alert(`Invalid Email: domain required`);
} else if (!username){
    alert(`Invalid Email: username required`);
} else{
    invalid = false;
}

if (invalid){
    throw Error(`[Program Stopped]`);
}


alert(`Email: ${email}\n Username: ${username}
Domain: ${domain}`);