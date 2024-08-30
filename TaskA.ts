// 100 Days Of Coding Challenge!

/** Question 97: Current Date in DD-MM-YYYY Format:
Write a function that returns the current date in the format `DD-MM-YYYY`.*/

//--------------------------------------------------------------------------

// Function "getCurrentDate()" returns the current date in the format DD-MM-YYYY
function getCurrentDate(): string {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0"); // Get day and pad with leading zero if needed
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Get month (0-indexed) and pad
  const year = today.getFullYear().toString(); // Get full year
  return `${day}-${month}-${year}`; // Return formatted date
}

// Call the function and store the result in a variable
const formattedDate = getCurrentDate();
console.log(`Current date: ${formattedDate}`);
