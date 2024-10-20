let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick= () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}
const sr=ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true,
})
sr.reveal('.hero-text',{delay:300, origin: 'top'});
sr.reveal('.hero-img',{delay:450, origin: 'right'});


const shareLink = document.getElementById('shareLink');
const shareButton = document.getElementById('shareButton');

if (navigator.share) {
    shareLink.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the default link behavior
    try {
        await navigator.share({
        title: 'Web Share API Example',
        text: 'Check out this web page!',
        url: window.location.href
        });
        console.log('Successfully shared');
    } catch (error) {
        console.error('Error sharing:', error);
    }
    });
} else {
    // Web Share API not supported, provide fallback or message to the user
    shareButton.disabled = true;
    console.log('Web Share API not supported');
}
