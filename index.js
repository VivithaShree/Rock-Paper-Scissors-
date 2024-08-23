//index page code

// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const nickname = document.getElementById('nickname').value;
//     const country = document.getElementById('country').value;
//     const gender = document.getElementById('gender').value;

    
   

    function getdetails()
    {
let nickname=document.querySelector("#nickname").value;
localStorage.setItem("nick",nickname);
window.location.href="RockPaperSisccor.html";
console.log(nickname);
    }

   
    


