// 100 Days Of Coding Challenge!

/** Question 98: Days Left Until New Year:
Create a JavaScript snippet that calculates and logs how many days are left until New Year.*/

//-------------------------------------------------------------------------------------------

// Function "daysUntilNewYear" to calculate and return the number of days left until New Year
function daysUntilNewYear(): number {
  const today = new Date();
  const newYear = new Date(today.getFullYear(), 11, 31); // December 31st
  const timeDifference = newYear.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return daysLeft;
}

// Call the function and log the result
const daysRemaining = daysUntilNewYear();
console.log(`Days left until New Year: ${daysRemaining}`);
