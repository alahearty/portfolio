document.addEventListener("DOMContentLoaded", () => {
    const controls = document.querySelectorAll(".control");
    
    controls.forEach(button => {
        button.addEventListener("click", handleControlClick);
        button.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleControlClick.call(button);
            }
        });
    });

    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", toggleLightMode);
        themeBtn.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleLightMode();
            }
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            sendEmail(e);
        });
    }

    function handleControlClick() {
        const activeBtn = document.querySelector(".active-btn");
        if (activeBtn) {
            activeBtn.classList.remove("active-btn");
        }
        this.classList.add("active-btn");

        const activeElement = document.querySelector(".active");
        if (activeElement) {
            activeElement.classList.remove("active");
        }
        const targetElement = document.getElementById(this.dataset.id);
        if (targetElement) {
            targetElement.classList.add("active");
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    
    function toggleLightMode() {
        document.body.classList.toggle("light-mode");
        const isLightMode = document.body.classList.contains("light-mode");
        localStorage.setItem("theme", isLightMode ? "light" : "dark");
    }
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
});

function downloadPDF(event) {
    if (event) {
        event.preventDefault();
    }
    try {
        const link = document.createElement('a');
        link.href = 'Woriayibapri_Hearty_Alapher_Resume.pdf';
        link.download = 'Woriayibapri_Hearty_Alapher_Resume.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading PDF:', error);
        alert('Unable to download resume. Please contact me directly.');
    }
}

function sendEmail(event) {
    if (event) {
        event.preventDefault();
    }
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
        alert('Please fill in all fields.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        return false;
    }

    try {
        const recipient = 'alapherwori8g5@gmail.com';
        const emailBody = `Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\n${message.value.trim()}`;
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject.value.trim())}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            if (confirm('Email client opened. Clear form?')) {
                document.getElementById('contactForm').reset();
            }
        }, 1000);
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Unable to open email client. Please send an email directly to alapherwori8g5@gmail.com');
    }
    
    return false;
}