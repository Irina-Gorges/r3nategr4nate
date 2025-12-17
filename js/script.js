/*====================== toogle icon navbar ======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*====================== scroll sections active link ======================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
       };
    });


    /*====================== sticky navbar ======================*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*====================== scroll up button ======================*/
let scrollUpBtn = document.querySelector('#scrollUpBtn');

scrollUpBtn.classList.toggle('show', window.scrollY > 100);

/*====================== remove toggle icon and navbar when click navbar link (scroll) ======================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};



/*====================== scroll reveal ======================*/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*====================== typed js ======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Twitch Streamerin', 'Vollblutschwäbin', 'Gamerin'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*====================== form validation ======================*/
const form = document.getElementById('contactForm');

// Validierungsfunktionen
function validateName() {
    const name = document.getElementById('name').value.trim();
    const errorEl = document.getElementById('name-error');
    if (name === '' || name.length < 2) {
        errorEl.textContent = 'Bitte gib Deinen Namen ein (min. 2 Zeichen).';
        return false;
    } else {
        errorEl.textContent = '';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const errorEl = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        errorEl.textContent = 'Bitte gib Deine E-Mail-Adresse ein.';
        return false;
    } else {
        errorEl.textContent = '';
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value.trim();
    const errorEl = document.getElementById('phone-error');
    if (phone === '' || !/^\d{10,15}$/.test(phone.replace(/\s/g, ''))) {
        errorEl.textContent = 'Bitte gib Deine Telefonnummer ein.';
        return false;
    } else {
        errorEl.textContent = '';
        return true;
    }
}

function validateSubject() {
    const subject = document.getElementById('subject').value.trim();
    const errorEl = document.getElementById('subject-error');
    if (subject === '') {
        errorEl.textContent = 'Bitte gib Dein Anliegen ein.';
        return false;
    } else {
        errorEl.textContent = '';
        return true;
    }
}

function validateMessage() {
    const message = document.getElementById('message').value.trim();
    const errorEl = document.getElementById('message-error');
    if (message === '') {
        errorEl.textContent = 'Bitte gib Deine Nachricht ein.';
        return false;
    } else {
        errorEl.textContent = '';
        return true;
    }
}

// Event-Listener für Echtzeit-Validierung
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('subject').addEventListener('blur', validateSubject);
document.getElementById('message').addEventListener('blur', validateMessage);

// Optional: Fehler beim Tippen entfernen, wenn gültig
document.getElementById('name').addEventListener('input', () => { if (validateName()) {} });
document.getElementById('email').addEventListener('input', () => { if (validateEmail()) {} });
document.getElementById('phone').addEventListener('input', () => { if (validatePhone()) {} });
document.getElementById('subject').addEventListener('input', () => { if (validateSubject()) {} });
document.getElementById('message').addEventListener('input', () => { if (validateMessage()) {} });

// Submit-Validierung
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
        alert('Formular erfolgreich gesendet!');
        // this.submit(); // Entferne Kommentar, um tatsächlich zu senden
    }
});