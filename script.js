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
   
    event.preventDefault();


    if(pass.value === pass2.value && username.length != 0 && password.length !=0){
    const body = {username,password};
    fetch("https://obscure-ocean-75269.herokuapp.com/adduser", {
        method : "POST",
        headers :{
        "Content-Type" : "application/json",
        },

        body: JSON.stringify(body),

    }).then((data)=>{
        return data.text();
    }).then((result)=>{
       console.log(result);
    })
    alert("You have been registered");}
    else if(pass.value != pass2.value){
    alert("Both Passwords Don't Match Try Again");}

    user.value = "";
    pass.value="";
    pass2.value="";
    
       
    
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



