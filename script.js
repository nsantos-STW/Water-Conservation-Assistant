function analyzeUsage() {
  const people = document.getElementById("people").value;
  const habits = document.querySelectorAll(".habit:checked");

  if (!people || people <= 0) {
    alert("Enter number of people in household.");
    return;
  }

  // Average water use (USGS)
  const gallonsPerPersonPerDay = 82;
  const yearlyUse = gallonsPerPersonPerDay * people * 365;

  let savings = 0;

  habits.forEach(habit => {
    switch (habit.value) {

      case "tap":
        savings += 5700;
        break;

      case "dishwasher":
        savings += 320;
        break;

      case "short_showers":
        savings += 2700;
        break;

      case "toilet":
        savings += 13000;
        break;

      case "fix_leaks":
        savings += 9400;
        break;

      case "irrigation":
        savings += 7600;
        break;

      case "lawn":
        savings += 8000;
        break;

      case "faucet":
        savings += 700;
        break;
    }
  });

  const costSavings = (savings * 0.01).toFixed(0); // estimated value

  document.getElementById("baseline").innerText =
    `Estimated yearly household water use: ${yearlyUse.toLocaleString()} gallons.`;

  document.getElementById("savings").innerText =
    `You could save approximately ${savings.toLocaleString()} gallons of water per year.`;

  document.getElementById("cost").innerText =
    `Estimated yearly savings: about $${costSavings}.`;

  document.getElementById("impact").innerText =
    `Saving water helps reduce shortages expected across many U.S. states and protects vital freshwater resources.`;

  document.getElementById("results").classList.remove("hidden");
}
