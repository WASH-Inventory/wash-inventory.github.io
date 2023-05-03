const inputs = document.querySelectorAll(".input");
var btn = document.getElementById('btn');


function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

///////////////////////

const serviceID = ${{ vars.serviceID }};
const templateID = ${{ vars.templateID }};
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_h8tjnea';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert("📧Message Adressed Succesfully !!!📧");
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});
