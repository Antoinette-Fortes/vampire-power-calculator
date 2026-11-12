# 🔌 Vampire Power & Energy Cost Calculator

A responsive web application designed to help households identify and calculate the hidden annual electricity costs of "vampire power" (standby power consumed by electronics while turned off or idle).

🔗 **[Try the Live Calculator Here](https://antoinette-fortes.github.io/vampire-power-calculator/)**



## 💡 The Problem It Solves
With rising utility rates, many households unknowingly lose up to 10% of their annual electricity bill to appliances drawing standby power. This tool provides an instant, ad-free breakdown of continuous wattage draw and financial waste.

## ✨ Key Features
* **Custom Electricity Rates:** Adjusts calculations dynamically based on the user's local ¢/kWh utility rate.
* **Interactive Appliance Grid:** Quick-toggle presets for common household electronics (gaming consoles, smart TVs, routers, etc.).
* **Custom Device Builder:** Allows users to input unique household appliances and wattages on the fly.
* **Mobile-Friendly Design:** Responsive dark-mode UI built to work seamlessly on both desktop and mobile browsers.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure and form inputs.
* **CSS3:** Responsive CSS Grid/Flexbox layout and custom dark-mode styling.
* **JavaScript (ES6):** Real-time DOM manipulation, event listeners, and energy cost calculation logic.
* **GitHub Pages:** Cloud hosting and deployment.

## 📐 How the Math Works
The application converts continuous standby wattage into annual kilowatt-hours (kWh) using the standard energy formula:
`Annual kWh = (Total Watts × 24 Hours × 365 Days) ÷ 1,000`
