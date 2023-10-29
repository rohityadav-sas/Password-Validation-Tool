const commonclass = document.querySelectorAll('.commonclass');
const paragraph = Array.from(document.getElementsByTagName('p'));
const parent = document.querySelector('.parent');
eye.addEventListener('click', () => {
    if (user_password.type === 'text') {
        user_password.setAttribute('type', 'password');
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
    else {
        user_password.setAttribute('type', 'text');
        eye.classList.add('fa-eye');
        eye.classList.remove('fa-eye-slash');
    }
})
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '0123456789';
const special = '!@#$%^&*()-_';

function validate(pw) {
    commonclass.forEach(e => reverse_fontawesome(e));
    paragraph.forEach(e => e.style.color = 'white');
    if (pw.length >= 8) {
        length_tick.style.color = '#54ff7f';
        change_fontawesome(fontawesome_5);
    }
        if ((/[a-z]/).test(pw)) {
            lc_tick.style.color = '#54ff7f';
            change_fontawesome(fontawesome_1);
        }
        if ((/[A-Z]/).test(pw)) {
            uc_tick.style.color = "#54ff7f";
            change_fontawesome(fontawesome_2);
        }
        if ((/[0-9]/).test(pw)) {
            num_tick.style.color = '#54ff7f';
            change_fontawesome(fontawesome_3);
        }
        if ((/[!@#$%^&*()_-]/).test(pw)) {
            spc_tick.style.color = '#54ff7f';
            change_fontawesome(fontawesome_4);
        }
}

function change_fontawesome(e) {
    e.style.color = '#54ff7f';
    e.classList.remove('fa-circle-dot');
    e.classList.remove('fa-regular');
    e.classList.add('fa-solid');
    e.classList.add('fa-check');
}

function reverse_fontawesome(e) {
    e.style.color = 'white';
    e.classList.add('fa-circle-dot');
    e.classList.add('fa-regular');
    e.classList.remove('fa-solid');
    e.classList.remove('fa-check');
}
const mediaQuery = window.matchMedia("(max-width: 600px)");
if (mediaQuery.matches) {
    user_password.addEventListener('focus', () => {
        const offsetY = -120;
        document.body.style.transform = `translateY(${offsetY}px)`;
    })
    user_password.addEventListener('blur', () => {
        document.body.style.transform = `translateY(0px)`;
    })
}
