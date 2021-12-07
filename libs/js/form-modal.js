// let modal = document.querySelector("#shortCodeInfoModal");
// let modalOverlay = document.querySelector("#modal-overlay");
// // let closeButton = document.querySelector("#close-button");
// let openButton = document.querySelector("#open-button");backendUrl
let paramsBtn = document.querySelector("#paramsBtn");
let backBtn = document.querySelector("#backBtn");
let paramsForm = document.querySelector("#paramsForm");
let styleForm = document.querySelector("#styleForm");
let backendUrl = document.querySelector("#backendUrl");
// const envForm = document.querySelector("#env-form")
// const envFormModalClose = document.querySelector('#form-modal-close')
const registrationForm = document.querySelector("#shortCodeInformationForm");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
console.log(e);
localStorage.clear();
APPLICATION_URL =backendUrl.value;
console.log(APPLICATION_URL);
});

// closeButton.addEventListener("click", function () {
//     modal.classList.toggle("closed");
//     modalOverlay.classList.toggle("closed");
// });


// envFormModalClose.addEventListener('click', () => {
//     envForm.classList.toggle('form_visible')
// })
paramsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    paramsForm.css('display','block');
    styleForm.css('display','none');
})
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    paramsForm.css('display','none');
    styleForm.css('display','block');
})