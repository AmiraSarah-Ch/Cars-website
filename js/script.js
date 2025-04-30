function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

function buyCar(event) {
    event.preventDefault();
    let isLoggedIn = localStorage.getItem("userLoggedIn");
    if (!isLoggedIn) {
        alert("Please log in to proceed with your purchase.");
        window.location.href = "../html/collection.php"; 
        return;
    }
    document.getElementById("purchaseForm").style.display ="block";
}
document.addEventListener('DOMContentLoaded', function () {

const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

if (!loginForm || !usernameInput || !passwordInput) {
  console.error("Login form or inputs not found in the DOM!");
} else {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    
    fetch("../process_login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `email=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
      .then(response => response.text())
      .then(data => {
        if (data === "success") {
          localStorage.setItem("userLoggedIn", "true");
          window.location.href = "../html/collection.php";
        } else {
          alert("User not found, please try again.");
        }
      })
      .catch(error => {
        console.error("Error during login request:", error);
        alert("not found. Please try again.");
      });
    

  });
}

  });
  
const isLoggedIn = localStorage.getItem("isLoggedIn");

document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (isLoggedIn === "true") {
            document.querySelector('.purchase-form').style.display = 'block';
        } else {
            document.querySelector('.login-alert-card').style.display = 'block';
        }
    });
});


document.querySelector('#logout-btn').addEventListener('click', () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.php"; 
});

const msg = document.querySelector(".form-message");

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("lE75D7dE9TgX4ZW5U"); 
    console.log("EmailJS initialized successfully.");
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let parms = {
            sender_fullname: document.getElementById("fullname").value,
            sender_phone: document.getElementById("phone").value,
            sender_email: document.getElementById("email").value,
            
            message: document.getElementById("message").value
        };

        emailjs.send("service_sehaejg", "template_t890nbe", parms)
            .then(response => {
                alert("Email Sent Successfully!");
                console.log("SUCCESS!", response);
                document.getElementById("contact-form").reset();
            })
            .catch(error => {
                alert("Failed to send email. Please try again.");
                console.error("ERROR:", error);
            });
    });
});



const buttons = document.querySelectorAll('.book-btn');
  const form = document.getElementById('booking-form');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // vérifier si l'utilisateur est loggé (pseudo code)
      const loggedIn = false; // à remplacer par une vraie vérification

      if (!loggedIn) {
        alert("Please log in to book a car.");
        window.location.href = "login.php"; // ou afficher une carte JS
      } else {
        form.classList.remove('hidden');
      }
    });
  });