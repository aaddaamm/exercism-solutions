export function findOrdinal(number: number): string {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  }

  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function format(name: string, number: number): string {
  const ordinal = findOrdinal(number);

  return `${name}, you are the ${number}${ordinal} customer we serve today. Thank you!`;
}
