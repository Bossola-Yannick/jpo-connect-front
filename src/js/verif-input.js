let verifMail = false;
let passwordIdentique = false;

document.addEventListener("DOMContentLoaded", function () {
  const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  const regexCodeP = /^\d{5}$/;

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const codePInput = document.getElementById("codeP");
  const codePostalError = document.getElementById("codePostalError");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const passwordError = document.getElementById("passwordError");
  const identiquePasswordError = document.getElementById(
    "identiquePasswordError"
  );

  emailInput.addEventListener("input", function () {
    const mail = this.value;
    if (regexMail.test(mail)) {
      emailError.textContent = "Email valide";
      emailError.style.color = "green";
      verifMail = true;
    } else {
      emailError.textContent = "Format Email invalide";
      emailError.style.color = "red";
      emailError.style.background = "white";
      verifMail = false;
    }
  });

  codePInput.addEventListener("input", function () {
    const codeP = this.value;
    if (regexCodeP.test(codeP)) {
      codePostalError.textContent = "Format Code postal Validé";
      codePostalError.style.color = "green";
    } else {
      codePostalError.textContent =
        "Format Code Postal invalide ! Veuillez mettre que les 5 chiffre de votre code postal.";
      codePostalError.style.color = "red";
      codePostalError.style.background = "white";
    }
  });

  passwordInput.addEventListener("input", function () {
    const password = this.value;
    if (regexPassword.test(password)) {
      passwordError.textContent = "Format Password Validé";
      passwordError.style.color = "green";
    } else {
      passwordError.textContent =
        "Format Password requit: 1 Majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial";
      passwordError.style.color = "red";
      passwordError.style.background = "white";
    }

    confirmPasswordInput.addEventListener("input", function () {
      const verifPassword = this.value;
      if (password !== verifPassword) {
        identiquePasswordError.textContent = "Mot de Passe non identique !";
        identiquePasswordError.style.color = "red";
        identiquePasswordError.style.background = "white";
        passwordIdentique = false;
      } else {
        identiquePasswordError.textContent = "Mot de Passe identique !";
        identiquePasswordError.style.color = "green";
        identiquePasswordError.style.background = "none";
        passwordIdentique = true;
      }
    });
  });

  // Connexion
  const formConnection = document.getElementById("form-connection");
  if (formConnection) {
    formConnection.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (verifMail) {
        if (!email || !password) {
          document.getElementById("connection-message").textContent =
            "Mot de passe non renseigné !";
          document
            .getElementById("connection-message")
            .classList.add("message-error");
        } else {
          login(email, password);
        }
      }
    });
  }

  // Inscription
  document.querySelectorAll(".button-registration").forEach((btn) =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const firstname = document.getElementById("nom").value.trim();
      const lastname = document.getElementById("prenom").value.trim();
      const email = emailInput.value.trim();
      const adress = document.getElementById("adresse").value.trim();
      const codeP = codePInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      const city = document.getElementById("city").value.trim();

      if (
        !firstname ||
        !lastname ||
        !email ||
        !adress ||
        !codeP ||
        !password ||
        !confirmPassword ||
        !city
      ) {
        const status = document.getElementById("status-registration");
        status.textContent = "Veuillez remplir tous les champs CORRECTEMENT!";
        status.classList.add("message-error");
        return;
      }

      if (passwordIdentique) {
        registration(firstname, lastname, email, adress, codeP, password, city);
      }
    })
  );

  // Déconnexion
  document.querySelectorAll(".logout").forEach((el) =>
    el.addEventListener("click", async function (e) {
      e.preventDefault();
      sessionStorage.clear();
      const logoutUrl =
        window.location.href === "http://localhost/boutique-en-ligne/index.php"
          ? "./controller/logout.php"
          : "../controller/logout.php";
      try {
        await fetch(logoutUrl);
      } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
      }

      window.location.href = "http://localhost/boutique-en-ligne/index.php";
    })
  );
});

async function login(email, password) {
  try {
    const response = await fetch("../controller/ConnectionController.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const userConnect = JSON.parse(await response.text());

    if (userConnect.message === "Email ou mot de passe incorrect!") {
      document.getElementById("connection-message").textContent =
        "Email ou Mot de passe incorrect !";
      document
        .getElementById("connection-message")
        .classList.add("message-error");
    } else {
      sessionStorage.setItem("userConnectId", userConnect.userId);
      sessionStorage.setItem("userConnectRole", userConnect.userRole);

      if (userConnect.userId) {
        const res = await fetch(
          "../controller/CartController.php?action=get_cart_items",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await res.json();
        if (data.success && typeof data.cart_items !== "undefined") {
          document.querySelector(".cart-number-items").textContent =
            data.cart_items;
        }
      } else {
        document.querySelector(".cart-number-items").textContent = "0";
      }

      document.location.href = "../index.php";
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    const msg = document.getElementById("connection-message");
    msg.textContent = "Erreur serveur, veuillez réessayer plus tard.";
    msg.classList.add("message-error");
  }
}

async function registration(
  firstname,
  lastname,
  email,
  adress,
  codeP,
  password,
  city
) {
  try {
    const response = await fetch("../controller/InscriptionController.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstname,
        lastname,
        adress,
        postalCode: codeP,
        city,
      }),
    });

    const data = await response.json();
    if (data.success) {
      document.location.href = "./connectionVue.php";
    } else {
      const msg = document.getElementById("status-registration");
      msg.textContent = data.message || "Erreur lors de l'inscription.";
      msg.classList.add("message-error");
    }
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    const msg = document.getElementById("status-registration");
    msg.textContent = "Erreur serveur, veuillez réessayer plus tard.";
    msg.classList.add("message-error");
  }
}
