function login(event){
    event.preventDefault();
    // alert("hi from function..")

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if (!email || !password){
   return alert("all fields are mandetory")
}
var users = JSON.parse(localStorage.getItem("users"));

console.log(users)

for(var i = 0; i < users.length; i++){
    if(users[i].email == email && users[i].password == password){
        document.getElementById("email").value ="";
        document.getElementById("password").value ="";
        
        return alert("login succesfull.")
    }
}
return alert("please check your email password")
}