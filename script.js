let currentLat = "";
let currentLon = "";

// Get Location Automatically (Real-time feel)
navigator.geolocation.watchPosition(function(position) {
    currentLat = position.coords.latitude;
    currentLon = position.coords.longitude;

    document.getElementById("status").innerHTML =
        "📍 Live Location: " + currentLat + ", " + currentLon;

    document.getElementById("map").innerHTML =
        `<iframe width="90%" height="300"
        src="https://maps.google.com/maps?q=${currentLat},${currentLon}&z=15&output=embed">
        </iframe>`;
});

// SOS Alert
function sendSOS() {
    alert("🚨 SOS Sent!\nLocation shared with emergency contacts.");

    // Fake SMS simulation
    console.log("SOS sent with location:", currentLat, currentLon);
}

// Call Police
function callPolice() {
    window.location.href = "tel:100";
}

// Share Location (WhatsApp)
function shareLocation() {
    let message = `🚨 I need help! My location: https://maps.google.com/?q=${currentLat},${currentLon}`;
    let url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}