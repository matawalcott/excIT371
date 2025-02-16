document.addEventListener("DOMContentLoaded", () => {

    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        const currentHour = new Date().getHours();
        let greeting = "Hello!";

        if (currentHour >= 6 && currentHour < 12) {
            greeting = "Good Morning!";
        } else if (currentHour >+ 12 && currentHour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        welcomeMessage.textContent = '${greeting} Thank you for visiting my personal Portfolio'
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
})