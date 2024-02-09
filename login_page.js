const MainPageBackground = document.querySelector(".login_main_section");
const LoginPagePhone = document.querySelector(".login_page_phone");
const LoginPagePhoneContent = document.querySelector(".login_page_phone_content");
const LoginPagePhoneImage = document.querySelector(".login_page_img")
const LoginPageSignUpButton = document.querySelector(".signup_button")
const BackButtonLoginPage = document.querySelector(".back_button");
const LoginPageSignUpDiv = document.querySelector(".login_page_signup_div");

window.onmousemove = (e) => {
    MainPageBackground.style.background = `radial-gradient(circle farthest-side at ${e.clientX}px ${e.clientY}px, #6C22A6 0%, black 50%), radial-gradient(circle farthest-side at ${e.clientX + 30}px ${e.clientY + 30}px, #81689D 0%, black 50%)`
    LoginPagePhone.style.transform = `translate(-${e.clientX / 20}px, 0)`
    LoginPagePhoneContent.style.transform = `translate(calc(-50% - ${e.clientX / 20}px))`
    setTimeout(() => {
        LoginPagePhoneImage.style.transform = `translate(calc(-50% - ${e.clientX / 20}px), 0)`
    }, 100)
}

BackButtonLoginPage.onclick = (e) => {
    window.location.assign("/index.html");
}

LoginPageSignUpButton.onclick = () => {
    if(LoginPageSignUpDiv.style.right === "1rem") LoginPageSignUpDiv.style.right = `-100rem`;
    else LoginPageSignUpDiv.style.right = `1rem`;
}