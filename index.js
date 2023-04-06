import countries from "./countries.js";
import { validate } from "./util/validate.js";
let selectcountry = document.getElementById("selectcountry");
let Username = document.getElementById("Username");
let usernameerror = document.getElementById("usernameerror");
let signup = document.getElementById("signup");
let Password = document.getElementById("Password");
let passworderror = document.getElementById("passworderror");
let Confirmpassword = document.getElementById("Confirmpassword");
let confirmpassworderror = document.getElementById("confirmpassworderror");
let countryerror = document.getElementById("countryerror");
let Fullname = document.getElementById("Fullname");
let fullnameerror = document.getElementById("fullnameerror");
let Passportdiv = document.getElementById("Passportdiv");
let passporterror = document.getElementById("passporterror");
let Addressarea = document.getElementById("Addressarea");
let addresserror = document.getElementById("addresserror");
let Monthlynewsletter = document.getElementById("monthlynewsletter");//We give parent div name....
let Monthlynewslettererror = document.getElementById("Monthlynewslettererror");
let Tnc = document.getElementById("monthlynewsletter");//We give parent div name......
let tncerror = document.getElementById("tncerror");
let nomatch = document.getElementById("nomatch");
const formstatus = document.getElementById("form-status");
let favcolor = document.getElementById("favcolor");
formstatus.value = true;
signup.addEventListener("click", () => {
    formstatus.value = true;
    let c1 = validate(Username, usernameerror, "text");
    let c2 = validate(Password, passworderror, "text");
    let c3 = validate(Confirmpassword, confirmpassworderror, "text");
    let c4 = validate(Fullname, fullnameerror, "text");
    let c5 = validate(selectcountry, countryerror, "select");
    let c6 = validate(Passportdiv, passporterror, "radio");
    let c7 = validate(Addressarea, addresserror, "text");
    let c8 = validate(Monthlynewsletter, Monthlynewslettererror, "checkbox");
    let c9 = validate(Tnc, tncerror, "checkbox");
    if (Password.value.trim() !== Confirmpassword.value.trim()) {
        nomatch.innerText = "Password and Confirm Password didn't match!";
        nomatch.style.color = "red";
        nomatch.style.display = "block";
    }
    else {
        nomatch.innerText = "";
        nomatch.style.display = "none";
    }
    if (c1 === false) {
        formstatus.value = false;
    }
    if (c2 === false) {
        formstatus.value = false;
    }
    if (c3 === false) {
        formstatus.value = false;
    }
    if (c4 === false) {
        formstatus.value = false;
    }
    if (c5 === false) {
        formstatus.value = false;
    }
    if (c6 === false) {
        formstatus.value = false;
    }
    if (c7 === false) {
        formstatus.value = false;
    }
    if (c8 === false) {
        formstatus.value = false;
    }
    if (c9 === false) {
        formstatus.value = false;
    }
    if (formstatus.value === "true") {
        const formvalues = {
            username: Username.value.trim(),
            password: Password.value.trim(),
            confirmpassword: Confirmpassword.value.trim(),
            fullname: Fullname.value.trim(),
            address: Addressarea.value.trim(),
            FavColor: favcolor.value.trim(),
            haspassport: Passportdiv.querySelector("input[name='Passport']:checked")?.value,
            monthlynewsletter: document.getElementById("Monthlynewsletter").checked,
            acceptTnC: document.getElementById("Tnc").checked,
        };
        console.log("Submit Values:", formvalues);
    }
});
populate();
function populate() {
    for (let i = 0; i < countries.length; i++) {
        let countryname = countries[i];
        let option = document.createElement("option");
        option.value = countryname;
        option.innerText = countryname;
        selectcountry.append(option);
    }
}  