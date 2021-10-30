// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'), 
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');



//Even Listeners

eventListeners();

function eventListeners() {
    // app init
    document.addEventListener('DOMContentLoaded', appInit);

    //validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // send email and reset button
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);

}


//Functions

//App initialization
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
} 

function sendEmail(e){
    e.preventDefault();

    // show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = "block";

    //hide spinner then show the send emial image
    setTimeout(function(){
        // hide the spinner
        spinner.style.display = "none";
    }, 3000);
}

//validate the fields
function validateField () {
    let errors;

    //validate the length of the field
    validateLength(this)

    //validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }

    // both will return errors, the check if there're any errors
    errors = document.querySelectorAll('.error');

     // check that the inputs are not empty
     if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if(errors.length === 0){
            //the button should be enabled
            sendBtn.disabled = false;
        }
     }
}
//validate the length of the fields
function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
//validate email (checks for @ in the value)

function validateEmail(field) {
    let emailText = field.value;
    //check if the emailText contains the @ sign
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }  
}

// reset the form
function resetForm() {
    sendEmailForm.reset();
}  