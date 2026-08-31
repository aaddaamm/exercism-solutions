export function colorCode(color: string): number {
  const colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

  return colors.indexOf(color);
}

export function decodedValue(colors: string[]): number {
  return colorCode(colors[0]) * 10 + colorCode(colors[1]);
}
