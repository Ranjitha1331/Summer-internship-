# 🌦️ Mission: Build a Live Weather Dashboard

Yesterday you learned how to manipulate the DOM.

Today your application is going to communicate with the internet.

The UI team has already designed a beautiful Weather Dashboard, but it cannot fetch any weather information.

Your task is to complete the JavaScript and make the application display live weather information using the OpenWeatherMap API.

No React.
No libraries.

Just Vanilla JavaScript.

---

## What you'll practice

- DOM Manipulation
- Event Listeners
- Fetch API
- JSON
- Updating the DOM Dynamically
- Basic Error Handling

---

## How to Start

1. Clone the repository.
2. Open the project in VS Code.
3. Open index.html using Live Server.
4. Create a free API key from OpenWeatherMap.
5. Open app.js.
6. Complete every 🚧 TASK.

# 🔑 Getting Your OpenWeatherMap API Key

Follow these steps to create a free OpenWeatherMap API key before starting the assignment.

---

## Step 1: Create an Account

1. Go to **https://openweathermap.org/**
2. Click **Sign Up**.
3. Create a free account.
4. Verify your email address.

---

## Step 2: Generate an API Key

1. Log in to your OpenWeatherMap account.
2. Click on your profile (top-right).
3. Navigate to **My API Keys**.
4. Create a new API key (or use the default key already provided).
5. Copy the generated API key.

Example:

```text
a1b2c3d4e5f6g7h8i9j0...
```

---

## Step 3: Add the API Key

Open **app.js** and replace:

```javascript
const apiKey = "YOUR_API_KEY";
```

with your own API key:

```javascript
const apiKey = "PASTE_YOUR_API_KEY_HERE";
```

---

## Step 4: Wait for Activation

> **Note**
>
> A newly created API key may take **5–15 minutes** (sometimes longer) to become active.
>
> If you receive an **"Invalid API key"** error immediately after creating it, wait a few minutes and try again.

---

## Step 5: Test Your API Key

Replace:

- `<CITY_NAME>` with a city name (e.g., `Bangalore`)
- `<API_KEY>` with your API key

Open the following URL in your browser:

```text
https://api.openweathermap.org/data/2.5/weather?q=<CITY_NAME>&appid=<API_KEY>&units=metric
```

Example:

```text
https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=YOUR_API_KEY&units=metric
```

If your API key is working, you should receive a JSON response containing the current weather data.

---

## ⚠️ Important

- Keep your API key private.
- **Do not commit your personal API key to a public GitHub repository.**
- Before pushing your code to GitHub, replace your key with:

```javascript
const apiKey = "YOUR_API_KEY";
```

Anyone cloning your repository should use **their own** API key.

---

# ⭐ Bonus Challenge (Optional)

Finished early? Enhance your Weather Dashboard by implementing the following features.

## 1️⃣ Loading Indicator

Display a loading spinner or a **"Loading..."** message while the weather data is being fetched.

**Expected Behavior**
- Show the loader immediately after clicking **Search**.
- Hide the loader once the API response is received.
- Hide the loader if an error occurs.

---

## 2️⃣ Error Handling

Improve the user experience by handling invalid inputs and API failures.

**Requirements**
- Display an error message if the city does not exist.
- Handle network errors gracefully.
- Prevent the application from crashing.
- Hide the previous weather details when an error occurs.

---

## 3️⃣ Deploy Your Project

Once your Weather App is complete:

1. Push your project to GitHub.
2. Enable **GitHub Pages** from the repository settings.
3. Verify that your deployed application works correctly.
4. Submit the following:
   - GitHub Repository URL
   - GitHub Pages Live URL

---

## 🎯 Bonus Learning Outcomes

By completing this challenge, you will learn:
- Loading states
- Error handling
- User experience improvements
- Deploying static websites using GitHub Pages

Good luck!