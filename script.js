document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".bird-name");

    inputs.forEach(input => {
        input.addEventListener("change", () => {
            alert(`Du har navngivet fuglen: ${input.value}!`);
        });
    });
});

// Tilføj en hemmelig besked
function showAlert() {
    const messages = [
        "Nymph parakitter elsker solsikkefrø!",
        "Vidste du? De kan lære at fløjte melodier 🎶",
        "De kan leve i over 20 år!",
        "Nymph parakitter er de næstmest populære kælefugle i verden!"
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}