document.getElementById("volumeCalculator").addEventListener("submit", function(event) {
    event.preventDefault();

    let side = Number(document.getElementById("inSide").value);
    let height = Number(document.getElementById("inHeight").value);
    let unit = document.getElementById("inUnit").value;

    if (side <= 0 || height <= 0) {
        document.getElementById("result").textContent = "Please enter numbers greater than 0.";
        return;
    }

    let volume = side * side * height / 3;

    // 1 cm³ = 1000 mm³
    if (unit === "mm") {
        volume = volume / 1000;
    }

    document.getElementById("result").textContent = "Volume = " + volume.toFixed(2) + " cm³";
});
