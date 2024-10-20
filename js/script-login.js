const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
function submitForm(event)
{
    event.preventDefault();
    const inputuseranme = document.getElementById('username').value;
    const inputpassword = document.getElementById('password').value;
    if(inputuseranme==='Belka'&&inputpassword==="ka1505b0909"){
        window.location.href="Belka.html"
    }
    else if(inputuseranme==='seif'&& inputpassword==='seif123')
    {
        window.location.href="seif.html"
    }
}