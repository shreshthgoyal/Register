const user = document.getElementById("user");
const pass = document.getElementById("password");
const pass2 = document.getElementById("password2");
const btn = document.getElementById("sign");
const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

btn.addEventListener("click" , () =>{
    var username = user.value;
    var password = pass.value;

    if(pass.value === pass2.value){
    const body = {username,password};
    fetch("http://localhost:5000/adduser", {
        method : "POST",
        headers :{
        "Content-Type" : "application/json",
        },

        body: JSON.stringify(body),

    }).then((data)=>{
        return data.text();
    }).then((result)=>{
       console.log(result);
    })}
    else
    {
        alert("Both Passwords Don't Match Try Again");
    }
});

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

togglePassword2.addEventListener('click', function (e) {
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});



particlesJS.load("particles-js", "particles.json");



