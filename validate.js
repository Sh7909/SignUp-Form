export function validate(inputcontrol, errordiv, inputType) {
    
    let expectedValue, inputValue;
    const formstatus = document.getElementById("form-status");
    switch (inputType) {
        case "text": expectedValue = "";
            inputValue = inputcontrol.value.trim();
            break;
        case "select": expectedValue = "0";
            inputValue = inputcontrol.value.trim();
            break;
        case "radio":
            inputValue = inputcontrol.querySelector("input[name='Passport']:checked");
            expectedValue = null;

            break;
        case "checkbox":
            
            const checkboxInputs = inputcontrol.querySelectorAll("input[name='check']:checked");
            let checkedCheckbox = null;
            checkboxInputs.forEach(input => {
                console.log(input,input.checked);
                if (input.checked) {
                    checkedCheckbox = input;
                }
            });
            inputValue = checkedCheckbox;
            expectedValue =null;

            // case "checkbox":
            //     inputValue = inputcontrol.querySelectorAll("input[name='check']:checked");
            //     expectedValue = null;

            break;
        default:
            break;
    }
    if (inputValue === expectedValue) {
        errordiv.style.color = "red";
        errordiv.style.fontWeight = "bold";
        errordiv.style.display = "block";
        errordiv.innerText = "Required";
        inputcontrol.style.outline = "1px solid red";
        if (inputType === "radio") {
            inputcontrol.style.outline = "2px solid red";
        }
        if (inputType === "checkbox") {        //here we are using same id's that's why it gives an error..
            inputcontrol.style.outline = "1px solid red";
        }
        formstatus.value = false;
    }
    else {
        formstatus.value = true;
        inputcontrol.style.outline = "none";
        errordiv.innerText = "";
        errordiv.style.display = "none";
    }
    return formstatus.value;
}
