const sr=ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 300,
    reset: true,
})
sr.reveal('.container form',{delay:300, origin: 'top'});
function Send(event){
    event.preventDefault();
    window.location.href="feedback.html";
}