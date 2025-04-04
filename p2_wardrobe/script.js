document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const tempSlider = document.getElementById('tempSlider');
    const tempDisplay = document.getElementById('tempDisplay');
    const rainCheck = document.getElementById('rainCheck');
    const suggestBtn = document.getElementById('suggestBtn');
    const clothingSuggestion = document.getElementById('clothingSuggestion');

    // Update the temperature display as the slider moves
    tempSlider.addEventListener('input', function() {
        tempDisplay.textContent = `${tempSlider.value}°F`;
    });

    // Generate clothing suggestion based on temperature and rain status when button is clicked
    suggestBtn.addEventListener('click', function() {
        const temperature = parseInt(tempSlider.value, 10);
        const isRaining = rainCheck.checked;
        let suggestion = "";

        // Determine suggestion based on temperature and rain
        if (temperature == 100) {
            suggestion = "Wear nothing at this point..."
        } else if (temperature >= 70 && !isRaining) {
            suggestion = "T-shirt and shorts!";
        } else if (temperature >= 70 && isRaining) {
            suggestion = "T-shirt, but don't forget a light rain jacket!";
        } else if (temperature < 70 && isRaining) {
            suggestion = "Coat and umbrella!";
        } else if (temperature >= 32 && temperature < 70) {
            suggestion = "Sweater and jeans!";
        } else {
            suggestion = "Thick winter coat and pants!";
        } 

        // Display the clothing suggestion
        clothingSuggestion.textContent = suggestion;
    });
});