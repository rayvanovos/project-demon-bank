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
  alert("GET IT WRONG AGAIN AND YOU SHALL BE TERMINATED FROM THIS BANK!!!!");
      
}
}


const availableBalance = 500000; // Huidig saldo

document.getElementById('transferForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Haal invoerwaarden op
  const account = document.getElementById('account').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  // Validatie
  let valid = true;

  // Valideer rekeningnummer
  if (!account || account.length < 8) {
    document.getElementById('accountError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('accountError').style.display = 'none';
  }

  // Valideer bedrag
  if (isNaN(amount) || amount <= 0 || amount > availableBalance) {
    document.getElementById('amountError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('amountError').style.display = 'none';
  }

  // Als alles geldig is
  if (valid) {
    document.getElementById('feedback').style.display = 'block';
    document.getElementById('transferForm').reset();
  }
});