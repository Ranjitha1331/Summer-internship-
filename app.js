// ==========================================
// STEP 1: GRAB HTML ELEMENTS
// ==========================================

const cityInput = document.getElementById("city-input");

// 🚧 TASK
// Grab the remaining elements

const searchBtn =
const cityName =
const temperature =
const description =
const humidity =
const weatherCard =


// ==========================================
// STEP 2: ADD CLICK EVENT
// ==========================================

// 🚧 TASK
// Listen for the Search button click

searchBtn.addEventListener("click", () => {

    // Read the city entered

    const city =

    // Prevent empty search

    if(city === ""){
        return;
    }

    // ==========================================
    // STEP 3: CREATE API URL
    // ==========================================

    const apiKey = "YOUR_API_KEY";

    // 🚧 TASK
    // Build the API URL

    const url =


    // ==========================================
    // STEP 4: FETCH DATA
    // ==========================================

    fetch(url)

        // 🚧 TASK
        // Convert response to JSON

        .then(response =>

        )

        .then(data => {

            // ==========================================
            // STEP 5: READ JSON
            // ==========================================

            // 🚧 TASK

            const city =
            const temp =
            const weather =
            const humidity =

            // ==========================================
            // STEP 6: UPDATE DOM
            // ==========================================

            // 🚧 TASK

        })

        .catch(error => {

            // ==========================================
            // STEP 7: SHOW ERROR
            // ==========================================

            // 🚧 TASK

        });

});