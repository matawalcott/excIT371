document.addEventListener("DOMContentLoaded", () => {

    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        const currentHour = new Date().getHours();
        let greeting = "Hello!";

        if (currentHour >= 6 && currentHour < 12) {
            greeting = "Good Morning!";
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        welcomeMessage.textContent = `${greeting} Thank you for visiting my personal portfolio`;
    }


    const downloadButton = document.getElementById("downloadResume");
    if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            const pdfPath = "MWRedacted.pdf";

            const link =document.createElement("a");
            link.href = pdfPath;
            link.download = "MW_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        });
    }

        const form = document.getElementById("contactForm");
        const feedback = document.getElementById("formFeedback");
    
        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
    
                const name = document.getElementById("name").value.trim();
                const email = document.getElementById("email").value.trim();
                const message = document.getElementById("message").value.trim();
    
                if (name === "" || email === "" || message === "") {
                    showFeedback("All fields are required.", "error");
                    return;
                }
    
                if (!isValidEmail(email)) {
                    showFeedback("Please enter a valid email address.", "error");
                    return;
                }
    
                showFeedback("Your message has been sent!", "success");
    
                form.reset();
            });
    
            function isValidEmail(email) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            }
    
            function showFeedback(message, type) {
                feedback.textContent = message;
                feedback.className = type === "success" ? "success" : "error";
                feedback.style.display = "block";
            }
        }
    });

