let modal = document.querySelector("#shortCodeInfoModal");
let modalOverlay = document.querySelector("#modal-overlay");
let closeButton = document.querySelector("#close-button");
let openButton = document.querySelector("#open-button");
let paramsBtn = document.querySelector("#paramsBtn");
let backBtn = document.querySelector("#backBtn");
let paramsForm = document.querySelector("#paramsForm");
let styleForm = document.querySelector("#styleForm");
const envForm = document.querySelector("#env-form")
const envFormModalClose = document.querySelector('#form-modal-close')
const registrationForm = document.querySelector("#shortCodeInformationForm");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted");
});

closeButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});


envFormModalClose.addEventListener('click', () => {
    envForm.classList.toggle('form_visible')
})
paramsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    paramsForm.classList.toggle('invisible');
    styleForm.classList.toggle('invisible');
})
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    paramsForm.classList.toggle('invisible');
    styleForm.classList.toggle('invisible');
})