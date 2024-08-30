// 100 Days Of Coding Challenge!

/** Question 99: Next Birthday Date Object:
Generate a date object representing your next birthday and log it to the console.*/

//---------------------------------------------------------------------------------

// Function "getNextBirthday" takes a birthdate as a string and returns a Date object representing the next birthday.
function getNextBirthday(birthdate: string): Date {
  const today = new Date();
  const currentYear = today.getFullYear();
  const [year, month, day] = birthdate.split("-").map(Number);

  const nextBirthday = new Date(currentYear, month - 1, day); // Month is 0-indexed
  if (nextBirthday < today) {
    // If the birthday has already occurred this year, calculate for next year
    nextBirthday.setFullYear(currentYear + 1);
  }

  return nextBirthday;
}

// Example usage:
const myBirthdate = "2024-11-02"; // Replace with your birthdate
const nextBirthdayDate = getNextBirthday(myBirthdate);
console.log(`Next birthday: ${nextBirthdayDate.toDateString()}`);
