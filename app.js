document.addEventListener("DOMContentLoaded", () => {
    const controls = document.querySelectorAll(".control");
    controls.forEach(button => {
        button.addEventListener("click", handleControlClick);
    });

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", toggleLightMode);

    function handleControlClick() {
        const activeBtn = document.querySelector(".active-btn");
        activeBtn.classList.remove("active-btn");
        this.classList.add("active-btn");

        const activeElement = document.querySelector(".active");
        activeElement.classList.remove("active");
        const targetElement = document.getElementById(this.dataset.id);
        targetElement.classList.add("active");
    }
    
    function toggleLightMode() {
        document.body.classList.toggle("light-mode");
    }
   
});

function downloadPDF() {
    var link = document.createElement('a');
    link.href = 'Woriayibapri_Hearty_Alapher_Resume.pdf';
    link.download = 'Woriayibapri_Hearty_Alapher_Resume.pdf';
    link.click();
}

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const recipient = 'alapherwori8g5@gmail.com';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  }