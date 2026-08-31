function colorCode(color: string): number {
  const colors: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };
  return colors[color];
}

function metricPrefix(value: number): string {
  if (value >= 1e9) {
    return 'gigaohms';
  } else if (value >= 1e6) {
    return 'megaohms';
  } else if (value >= 1e3) {
    return 'kiloohms';
  } else {
    return 'ohms';
  }
}

function formatValue(value: number): string {
  if (value >= 1e9) {
    return (value / 1e9).toString();
  } else if (value >= 1e6) {
    return (value / 1e6).toString();
  } else if (value >= 1e3) {
    return (value / 1e3).toString();
  } else {
    return value.toString();
  }
}

export function decodedResistorValue(colors: string[]): string {
  const [first, second, third] = colors;
  const value = colorCode(first) * 10 + colorCode(second);

  const multiplier = Math.pow(10, colorCode(third));
  const totalValue = value * multiplier;

  const prefix = metricPrefix(totalValue);

  return `${formatValue(totalValue)} ${prefix}`;
}
