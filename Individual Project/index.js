function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove( 'menu--open')
}

// template_h4dfitb
// service_gym010n
// EauK6lZM623AA1VCY

function contact(event) {

    event.preventDefault();

    const loading = document.querySelector('.contact__overlay--loading');
    const success = document.querySelector('.contact__overlay--complete');

    loading.classList += " contact__overlay--visible"

    emailjs
        .sendForm(
            'service_gym010n',
            'template_h4dfitb',
            event.target,
            'EauK6lZM623AA1VCY'
    ).then(() => {
        loading.classList.remove("contact__overlay--visible");
        success.classList += " contact__overlay--visible";
    }).catch(() => {
        loading.classList.remove("contact__overlay--visible");
        alert(
            "The email service appears to be down. Please try again later."
        )
    })
}

let contactOpen = false;

function toggleContact() {
    
    if (contactOpen) {
        contactOpen = false;
        return document.body.classList.remove("contact--open");
    }
    contactOpen = true;
    document.body.classList += " contact--open";

}

let darkMode = false;

function toggleDarkMode() {

    darkMode = !darkMode;
    
    if (darkMode) {
        document.body.classList += " dark--mode"
    }

    else {
        document.body.classList.remove("dark--mode")
    }

}