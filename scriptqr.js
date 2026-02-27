const facility = localStorage.getItem("facility");
const location = localStorage.getItem("location");

// Safety check
if (!facility || !location) {
    alert("No selection made!");
    window.location.href = "index.html";
}

// Show on screen
document.getElementById("facilityName").innerText = facility.toUpperCase();
document.getElementById("locationName").innerText = location.toUpperCase();

// Create unique session
const sessionId = Date.now();

// Structured QR Data
const qrData = JSON.stringify({
    facility: facility,
    location: location,
    session: sessionId
});

// Generate QR
QRCode.toCanvas(
    document.getElementById("qrcode"),
    qrData,
    {
        width: 250,
        margin: 2
    }
);