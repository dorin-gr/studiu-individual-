document.getElementById('validation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const agree = document.getElementById('agree').checked;

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const agreeError = document.getElementById('agree-error');

    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    agreeError.textContent = '';

    if (name.trim() === '') {
        nameError.textContent = 'Numele este obligatoriu.';
        isValid = false;
    }

    if (!validateEmail(email)) {
        emailError.textContent = 'Introduceți un email valid.';
        isValid = false;
    }

    if (!validatePhone(phone)) {
        phoneError.textContent = 'Introduceți un număr de telefon valid.';
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent = 'Trebuie să fiți de acord cu termenii și condițiile.';
        isValid = false;
    }

    if (isValid) {
        alert('Formularul a fost trimis cu succes!');
        document.getElementById('validation-form').reset();
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
}

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

showImage(currentImageIndex);