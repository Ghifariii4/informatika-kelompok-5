document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const networkContainers = document.querySelectorAll(".network-container");
    const actionButtons = document.querySelectorAll(".action-btn");
    
    // Fungsi untuk menampilkan bagian yang dipilih
    function showNetworkSection(targetId) {
        networkContainers.forEach(container => {
            if (container.id === targetId) {
                container.classList.add("active");
            } else {
                container.classList.remove("active");
            }
        });
    }

    // Event listener untuk tombol navigasi
    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            const target = this.getAttribute("data-target");
            showNetworkSection(target);
            navButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Fungsi untuk menampilkan informasi dan kuis
    actionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const containerId = this.id.split("-")[0] + "-info";
            const quizContainerId = this.id.split("-")[0] + "-quiz-container";
            const infoBox = document.getElementById(containerId);
            const quizContainer = document.getElementById(quizContainerId);

            if (this.id.includes("show-info")) {
                infoBox.classList.toggle("hidden");
            } else if (this.id.includes("quiz")) {
                quizContainer.classList.toggle("hidden");
            }
        });
    });

    // Event listener untuk perangkat interaktif
    const interactiveAreas = document.querySelectorAll(".interactive-area");
    interactiveAreas.forEach(area => {
        area.addEventListener("click", function(event) {
            if (event.target.classList.contains("device")) {
                const deviceName = event.target.innerText;
                alert(`Anda mengklik perangkat: ${deviceName}`);
            }
        });
    });

    // Event listener untuk pilihan kuis
    const quizOptions = document.querySelectorAll(".quiz-option");
    quizOptions.forEach(option => {
        option.addEventListener("click", function() {
            const isCorrect = this.getAttribute("data-correct") === "true";
            const resultContainer = this.closest(".quiz-container").querySelector(".quiz-result");
            resultContainer.innerText = isCorrect ? "Jawaban Benar!" : "Jawaban Salah!";
        });
    });
});
