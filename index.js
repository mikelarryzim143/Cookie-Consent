document.addEventListener('DOMContentLoaded', (event) => {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const closebtn= document.getElementById('close');
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });
    closebtn.addEventListener('click', () =>{
        localStorage.setItem('cookiesAccepted', 'false');
        cookieConsent.style.display='none'
    });
});