function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error: throw new Error('Invalid input');
  }
  return numA + numB;  
}

const result1 = addSafe(5, '10'); // Correct handling of string input
const result2 = add(5, 10); // Works as expected
const result3 = addSafe('hello', 10); // handles non-numeric string input