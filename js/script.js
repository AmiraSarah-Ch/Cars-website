function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

function filterModels() {
    const brand = document.getElementById("brandFilter").value;
    const year = document.getElementById("yearFilter").value;
    const type = document.getElementById("typeFilter").value;

    const cards = document.querySelectorAll(".model-card");

    cards.forEach(card => {
        const cardBrand = card.getAttribute("data-brand");
        const cardYear = card.getAttribute("data-year");
        const cardType = card.getAttribute("data-type");

        if (
            (brand === "all" || cardBrand === brand) &&
            (year === "all" || cardYear === year) &&
            (type === "all" || cardType === type)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function buyCar(event) {
    event.preventDefault();

    // Vérifier si l'utilisateur est connecté (exemple : avec localStorage ou session)
    let isLoggedIn = localStorage.getItem("userLoggedIn");

    if (!isLoggedIn) {
        alert("Please log in to proceed with your purchase.");
        window.location.href = "login.html"; 
        return;
    }

    // Si connecté, afficher le formulaire d'achat
    document.getElementById("purchaseForm").style.display = "block";
}

document.querySelector('#login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // empêche le rechargement

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;


    if (username === "admin@gmail.com" && password === "1234") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "../html/collection.html";
    } else {
        alert("Wrong credentials, please try again.");
    }
});


const isLoggedIn = localStorage.getItem("isLoggedIn");

document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (isLoggedIn === "true") {
            // Afficher le formulaire d’achat
            document.querySelector('.purchase-form').style.display = 'block';
        } else {
            // Afficher une alerte ou une carte demandant de se connecter
            document.querySelector('.login-alert-card').style.display = 'block';
        }
    });
});


document.querySelector('#logout-btn').addEventListener('click', () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html"; // ou page de login
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
