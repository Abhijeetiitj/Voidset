function selectSport(sportName) {
    localStorage.setItem("selectedSport", sportName);
    window.location.href = "qr.html";
}

function updateSportsRush() {

    const sports = [
        "badminton",
        "tabletennis",
        "squash",
        "gym",
        "kabbadi"
    ];

    sports.forEach(sport => {

        const count = parseInt(document.getElementById(`${sport}-count`).innerText);
        const statusElement = document.getElementById(`${sport}-status`);

        if (count < 5) {
            statusElement.innerText = "Low Rush";
            statusElement.style.backgroundColor = "#1e7e34";
        }
        else if (count < 15) {
            statusElement.innerText = "Moderate";
            statusElement.style.backgroundColor = "#b8860b";
        }
        else {
            statusElement.innerText = "High Rush";
            statusElement.style.backgroundColor = "#8b0000";
        }

    });
}