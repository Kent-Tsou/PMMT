// document.addEventListener("DOMContentLoaded", ()=> {
//      const loginForm = document.querySelector("#login");
//      const createAccountForm = document.querySelector("#createAccount");

//      document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//          e.preventDefault();
//          loginForm.classList.add("form_hidden");
//          createAccountForm.classList.remove("form_hidden")
//      })

//      document.querySelector("#linkLogin").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.remove("form_hidden");
//         createAccountForm.classList.add("form_hidden")
//     })
// })

let login = document.getElementById("login");
let createAccount = document.getElementById("createAccount");

function forms(a) {
    if (a == 1) {
        login.style.display="none";
    } else {
        createAccount.style.display="block";
    }
}

