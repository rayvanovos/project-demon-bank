function showCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('nl-NL', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
}


window.onload = showCurrentDate;

function login(){
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

if(username == "admin1" && password == "admin123"){
  alert("welcome to the demon bank, i shall watch over your money with protection.😈");
  window.location.href = ("admin.html")
}
else if(username == "user1" && password == "password1"){
  alert("welcome to the demon bank, i shall watch over your money with protection.😈");
  window.location.href = ("user1.html")
}
else if(username == "user2" && password == "password2"){
  alert("welcome to the demon bank, i shall watch over your money with protection.😈");
  window.location.href = ("user2.html")
}

else{
  alert("DO IT AGAIN!!! YOU DID IT WRONG!!!!.");
      
}
}