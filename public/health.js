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

// bmi 

function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const height = parseFloat(document.getElementById('bmi-height').value);
    const age = parseInt(document.getElementById('bmi-age').value);
    const gender = document.getElementById('bmi-gender').value;
    const activity = document.getElementById('bmi-activity').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        document.getElementById('bmi-result').innerText = "Please enter valid positive values for weight, height, and age.";
        document.getElementById('bmi-category').innerText = "";
        document.getElementById('bmi-advice').innerText = "";
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display BMI
    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi.toFixed(2)}`;

    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById('bmi-category').innerText = `BMI Category: ${category}`;

    // Provide personalized advice
    let advice = "";
    if (category === "Underweight") {
        advice = "You may need to focus on gaining weight in a healthy way. Consider increasing your calorie intake and adding resistance training to build muscle mass.";
    } else if (category === "Normal weight") {
        advice = "You have a healthy BMI. Keep up the good work with balanced eating and staying active.";
    } else if (category === "Overweight") {
        advice = "Consider adopting a healthier diet and increasing physical activity. Aiming for a gradual weight loss is recommended.";
    } else if (category === "Obesity") {
        advice = "It's important to seek professional advice for weight management. A personalized plan focusing on diet and exercise can help you improve your health.";
    }

    document.getElementById('bmi-advice').innerText = advice;

    // Adjust advice based on age and activity level
    if (age < 18) {
        document.getElementById('bmi-advice').innerText += " Since you're under 18, make sure to consult with a healthcare provider before making any significant changes to your diet or activity.";
    }

    if (activity === "sedentary") {
        document.getElementById('bmi-advice').innerText += " As you're mostly sedentary, consider incorporating more physical activity into your routine to improve overall health.";
    } else if (activity === "light") {
        document.getElementById('bmi-advice').innerText += " Your activity level is light. Keep it up, but consider increasing intensity for better fitness.";
    } else if (activity === "moderate") {
        document.getElementById('bmi-advice').innerText += " Your moderate activity level is great. Keep challenging yourself to maintain or improve your fitness.";
    } else {
        document.getElementById('bmi-advice').innerText += " Your intense activity level is fantastic. Continue with this routine to maintain a healthy lifestyle.";
    }
}

// calories intake 

function calculateCalories() {
    const weight = parseFloat(document.getElementById('calorie-weight').value);
    const height = parseFloat(document.getElementById('calorie-height').value);
    const age = parseInt(document.getElementById('calorie-age').value);
    const gender = document.getElementById('calorie-gender').value;
    const activity = document.getElementById('calorie-activity').value;
    const goal = document.getElementById('calorie-goal').value;

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        document.getElementById('calorie-result').innerText = "Please enter valid positive values for weight, height, and age.";
        return;
    }

    // Calculate BMR (Basal Metabolic Rate) based on gender
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        document.getElementById('calorie-result').innerText = "Invalid gender selection.";
        return;
    }

    // Adjust BMR based on activity level
    let activityMultiplier;
    switch (activity) {
        case "sedentary":
            activityMultiplier = 1.2;
            break;
        case "light":
            activityMultiplier = 1.375;
            break;
        case "moderate":
            activityMultiplier = 1.55;
            break;
        case "intense":
            activityMultiplier = 1.725;
            break;
        default:
            document.getElementById('calorie-result').innerText = "Invalid activity level selection.";
            return;
    }

    const maintenanceCalories = bmr * activityMultiplier;

    // Adjust calories based on the user's goal
    let recommendedCalories;
    let advice;
    if (goal === "loss") {
        recommendedCalories = maintenanceCalories - 500; // 500-calorie deficit for weight loss
        advice = "To lose weight, aim for a calorie deficit. Combine a healthy diet with regular exercise.";
    } else if (goal === "maintenance") {
        recommendedCalories = maintenanceCalories; // No adjustment
        advice = "To maintain your weight, continue with your current activity level and dietary habits.";
    } else if (goal === "gain") {
        recommendedCalories = maintenanceCalories + 500; // 500-calorie surplus for weight gain
        advice = "To gain weight, aim for a calorie surplus. Focus on nutrient-dense foods and strength training.";
    } else {
        document.getElementById('calorie-result').innerText = "Invalid goal selection.";
        return;
    }

    // Display results
    document.getElementById('calorie-result').innerText = `Recommended Daily Calories: ${recommendedCalories.toFixed(0)} kcal`;
    document.getElementById('calorie-advice').innerText = advice;
}

