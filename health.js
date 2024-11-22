// Protein Needs Calculator
function calculateProtein() {
    const weight = parseFloat(document.getElementById("protein-weight").value);
    const gender = document.getElementById("protein-gender").value;
    const activity = document.getElementById("protein-activity").value;

    if (weight > 0) {
        let proteinFactor;

        if (gender === "male") {
            switch (activity) {
                case "sedentary": proteinFactor = 1.2; break;
                case "light": proteinFactor = 1.4; break;
                case "moderate": proteinFactor = 1.6; break;
                case "intense": proteinFactor = 1.8; break;
            }
        } else {
            switch (activity) {
                case "sedentary": proteinFactor = 1.0; break;
                case "light": proteinFactor = 1.2; break;
                case "moderate": proteinFactor = 1.4; break;
                case "intense": proteinFactor = 1.6; break;
            }
        }

        const protein = (weight * proteinFactor).toFixed(2);
        document.getElementById("protein-result").textContent = `You need approximately ${protein}g of protein per day.`;
    } else {
        document.getElementById("protein-result").textContent = "Please enter a valid weight!";
    }
}

// Carb Needs Calculator
function calculateCarbs() {
    const weight = parseFloat(document.getElementById("carb-weight").value);
    const gender = document.getElementById("carb-gender").value;
    const activity = document.getElementById("carb-activity").value;

    if (weight > 0) {
        let carbFactor;

        if (gender === "male") {
            switch (activity) {
                case "sedentary": carbFactor = 3; break;
                case "light": carbFactor = 4; break;
                case "moderate": carbFactor = 5; break;
                case "intense": carbFactor = 6; break;
            }
        } else {
            switch (activity) {
                case "sedentary": carbFactor = 2.5; break;
                case "light": carbFactor = 3.5; break;
                case "moderate": carbFactor = 4.5; break;
                case "intense": carbFactor = 5.5; break;
            }
        }

        const carbs = (weight * carbFactor).toFixed(2);
        document.getElementById("carb-result").textContent = `You need approximately ${carbs}g of carbs per day.`;
    } else {
        document.getElementById("carb-result").textContent = "Please enter a valid weight!";
    }
}

// Water Intake Calculator
function calculateWater() {
    const weight = parseFloat(document.getElementById("water-weight").value);
    const gender = document.getElementById("water-gender").value;
    const activity = document.getElementById("water-activity").value;

    if (weight > 0) {
        let waterFactor;

        if (gender === "male") {
            switch (activity) {
                case "sedentary": waterFactor = 35; break;
                case "light": waterFactor = 40; break;
                case "moderate": waterFactor = 45; break;
                case "intense": waterFactor = 50; break;
            }
        } else {
            switch (activity) {
                case "sedentary": waterFactor = 30; break;
                case "light": waterFactor = 35; break;
                case "moderate": waterFactor = 40; break;
                case "intense": waterFactor = 45; break;
            }
        }

        const water = ((weight * waterFactor) / 1000).toFixed(2); // Convert ml to liters
        document.getElementById("water-result").textContent = `You need approximately ${water} liters of water per day.`;
    } else {
        document.getElementById("water-result").textContent = "Please enter a valid weight!";
    }
}
