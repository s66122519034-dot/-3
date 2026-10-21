document.getElementById("volumeCalculator").addEventListener("submit", function(event) {
    event.preventDefault();

    let radius = Number(document.getElementById("inRadius").value);
    let unit = document.getElementById("inUnit").value;

    if (radius <= 0) {
        document.getElementById("result").textContent = "Please enter numbers greater than 0.";
        return;
    }

    let volume = 2 * Math.PI * radius * radius * radius / 3;

    // 1 cm³ = 1000 mm³
    if (unit === "mm") {
        volume = volume / 1000;
    }

    document.getElementById("result").textContent = "Volume = " + volume.toFixed(2) + " cm³";
});
