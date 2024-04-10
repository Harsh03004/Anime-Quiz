const sign_in_btn = document.querySelector("#login-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});
// Wait for the DOM content to load
// document.addEventListener("DOMContentLoaded", function() {
//     // Select the container and image elements
//     const container = document.querySelector('.container');
//     const image = document.querySelector('.image');
    
//     // Add the show class to the container after a delay (e.g., 1 second)
//     setTimeout(function() {
//         container.classList.add("show");
//     }, 1000); // Adjust the delay as needed
    
//     // After the delay, remove the transform applied to the image
//     setTimeout(function() {
//         image.style.transform = 'none';
//     }, 1000); // Same delay as above
// });
