document.addEventListener("DOMContentLoaded", ()=> {
     const loginForm = document.querySelector("#login");
     const createAccountForm = document.querySelector("#createAccount");

     document.querySelector("#linkCreateAccount").addEventListener("click", e => {
         e.preventDefault();
         loginForm.classList.add("form_hidden");
         createAccountForm.classList.remove("form_hidden")
     })

     document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden")
    })
})

// function goToCreate() {
//     var signupElement = document.getElementById("signup-container");
//     var loginElement = document.getElementById("login-container");    
//     console.log(loginElement)
//     if (signupElement.style.display === "none") {
//         signupElement.style.display = "block";
//         loginElement.style.display= "none"
//       } else {
//         signupElement.style.display = "none";
//         loginElement.style.display= "block"
//       }
// }

// function goToSignUp() {
//     login.style.display="block";
//     createAccount.style.display="none";
//     var x = document.getElementById("login-container");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//       } else {
//         x.style.display = "none";
//       }
// }




