let totalWatts = 0;

function toggleAppliance(button) {
    // 1. Toggle the visual look of the button
    button.classList.toggle('active');
    
    // 2. Get the watt value from the button
    const watts = parseFloat(button.getAttribute('data-watts'));
    
    // 3. Add or subtract watts depending on if button is selected
    if (button.classList.contains('active')) {
        totalWatts += watts;
    } else {
        totalWatts -= watts;
    }
    
    // 4. Run the math function
    calculateSavings();
}

function calculateSavings() {
    // Get the current electricity rate from the input field
    const ratePerkWh = parseFloat(document.getElementById('rate').value) / 100; 
    
    // FORMULA: (Watts * 24 hours * 365 days) / 1000 to convert to kWh
    const annualkWh = (totalWatts * 24 * 365) / 1000;
    
    // Total cost = total kWh multiplied by the electricity rate
    const annualCost = annualkWh * ratePerkWh;
    
    // Update the screen with the new numbers
    document.getElementById('total-display').innerText = `$${annualCost.toFixed(2)}`;
    document.getElementById('details-display').innerText = `Based on ${totalWatts} Watts of continuous standby draw.`;
}

// Recalculate automatically if the user changes their electric rate manually
document.getElementById('rate').addEventListener('input', calculateSavings);
function addCustomAppliance() {
    const nameInput = document.getElementById('custom-name');
    const wattsInput = document.getElementById('custom-watts');
    
    const name = nameInput.value.trim();
    const watts = parseFloat(wattsInput.value);

    // Prevent adding blank names or invalid numbers
    if (!name || isNaN(watts) || watts <= 0) {
        alert("Please enter a valid appliance name and a wattage greater than 0.");
        return;
    }

    // Create a new button element
    const grid = document.querySelector('.appliance-grid');
    const newBtn = document.createElement('button');
    newBtn.className = 'appliance-btn';
    newBtn.setAttribute('data-watts', watts);
    newBtn.setAttribute('onclick', 'toggleAppliance(this)');
    newBtn.innerHTML = `🔌 ${name} <span class="watts">~${watts}W</span>`;

    // Add it to the grid and select it immediately
    grid.appendChild(newBtn);
    toggleAppliance(newBtn);

    // Clear the input boxes for the next item
    nameInput.value = '';
    wattsInput.value = '';
}
