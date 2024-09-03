const password_checker = document.querySelector('.password-checker');
const password = document.querySelector('#password');
const progress_bar = document.querySelector('.bar');

password.onkeyup = () => {
    //console.log(password.value);
    checkPasswordStrength(password.value);
}

function checkPasswordStrength(password){
    let strength = 0;

    if (password.match(/(?=.*[A-Z])/)) strength++; //1. Uppercase Characters
    if (password.match(/(?=.*[a-z])/)) strength++; //2. Lowercase Characters
    if (password.match(/(?=.*[0-9])/)) strength++; //3. Numerical Characters
    if (password.match(/(?=.*[!@#$%^&*])/)) strength++; //4. Special Characters
    if (password.match(/(?=.{9,})/)) strength++; //5. 9 Character 

    console.log(strength);

    switch(strength){
        case 0:
            password_checker.style.bordercolor = 'transparent';
            progress_bar.style.cssText = `width : ${(strength/5)*100}%; background-color: unset;`; break;
        case 1:
            password_checker.style.bordercolor = 'darkred';
            progress_bar.style.cssText = `width : ${(strength/5)*100}%; background-color: darkred;`; break;
        case 2:
            password_checker.style.bordercolor = 'green';
            progress_bar.style.cssText = `width : ${(strength/5)*100}%; background-color: green;`; break;
        case 3:
            password_checker.style.bordercolor = 'orange';
            progress_bar.style.cssText = `width : ${(strength/5)*100}%; background-color: orange;`; break;
        case 4:
            password_checker.style.bordercolor = 'lime';
            progress_bar.style.cssText = `width : ${(strength/5)*100}%; background-color: lime;`; break;
        case 5:
            password_checker.style.bordercolor = 'yellow';
            progress_bar.style.cssText = `width : ${(strength/5)*100}%; background-color: yellow;`; break;
    }
}

