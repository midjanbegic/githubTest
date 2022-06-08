// Electricity bill calculation
let firstReading = Number(prompt("Please enter your first reading!"));
let lastReading = Number(prompt("Please enter your last reading!"));
if (typeof firstReading === "number" && typeof lastReading === "number") {
  finalReading = lastReading - firstReading;
  console.log("Your consumption is:", finalReading, "kwH");
  if (finalReading <= 100) {
    console.log("Your category is: the most expensive category.");
    let finalBill = finalReading * 0.2;
    console.log("Your bill amounts:", finalBill, "$");
  } else if (finalReading <= 1000) {
    console.log("Your category is: middle category.");
    let finalBill = finalReading * 0.15;
    console.log("Your bill amounts:", finalBill, "$");
  } else if (finalReading >= 1001) {
    console.log("Your category is: the cheapest category.");
    let finalBill = finalReading * 0.1;
    console.log("Your bill amounts:", finalBill, "$");
  }
} else {
  console.log("Please keep your entry in numbers!");
}
