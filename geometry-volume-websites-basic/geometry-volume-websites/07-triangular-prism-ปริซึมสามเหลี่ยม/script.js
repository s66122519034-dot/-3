document.getElementById("volumeCalculator").addEventListener("submit", function(event) {
    event.preventDefault();

    let base = Number(document.getElementById("inBase").value);
    let triangleHeight = Number(document.getElementById("inTriangleHeight").value);
    let length = Number(document.getElementById("inLength").value);
    let unit = document.getElementById("inUnit").value;

    if (base <= 0 || triangleHeight <= 0 || length <= 0) {
        document.getElementById("result").textContent = "Please enter numbers greater than 0.";
        return;
    }

    let volume = base * triangleHeight * length / 2;

    // 1 cm³ = 1000 mm³
    if (unit === "mm") {
        volume = volume / 1000;
    }

    document.getElementById("result").textContent = "Volume = " + volume.toFixed(2) + " cm³";
});
