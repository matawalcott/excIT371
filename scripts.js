document.addEventListener("DOMContentLoaded", () => {
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