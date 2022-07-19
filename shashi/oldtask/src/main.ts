export function sample(x: number, y: number): string {
  let result: string;
  switch (x - y) {
    case 0:
      result = 'Result: 0';
      break;
    case 5:
      result = 'Result: 5';
      break;
    case 10:
      result = 'Result: 10';
      break;
  }

  return result;
}
