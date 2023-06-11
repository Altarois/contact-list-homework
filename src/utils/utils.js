//function to format the number in jsx

export function formatPhoneNumber(phoneNumber) {
    const digits = phoneNumber.split('');
    const formattedDigits = [];
  
    let count = 0;
    for (let i = 0; i < digits.length; i++) {
      formattedDigits.push(digits[i]);
      count++;
  
      if (count === 2 && i !== digits.length - 1) {
        formattedDigits.push(' ');
        count = 0;
      }
    }
  
    return formattedDigits.join('');
  }