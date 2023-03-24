function openForm() {
    document.getElementById("form-popup").style.display = "block";
  }
const showFormBtn = document.getElementById('routine-item');
const formPopup = document.getElementById('form-popup');
const formBackdrop = document.getElementById('form-backdrop');
const closeBtn = document.getElementById('close-btn');

showFormBtn.addEventListener('click', () => {
  formPopup.classList.add('show');
  formBackdrop.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  formPopup.classList.remove('show');
  formBackdrop.classList.remove('show');
});