const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e =>
{
    e.preventDefault();
    const emailVal = email.value;

    //check if valid email
    if (!validateEmail(emailVal)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
    }
});

function validateEmail(email) 
{
    var re = /^\S+@\S+$/;
    return re.test(String(email).toLowerCase);
}

