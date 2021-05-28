/* Question 1: The Fizz-Buzz Test
 *
 * Write a program that creates an array containing numbers from 1 to 100. But
 * for multiples of three append "Fizz" instead of the number and for the
 * multiples of five append "Buzz". For numbers which are multiples of both
 * three and five append "FizzBuzz".
 */

var expected = [
  1,      2,      'Fizz',     4,      'Buzz', 'Fizz',
  7,      8,      'Fizz',     'Buzz', 11,     'Fizz',
  13,     14,     'FizzBuzz', 16,     17,     'Fizz',
  19,     'Buzz', 'Fizz',     22,     23,     'Fizz',
  'Buzz', 26,     'Fizz',     28,     29,     'FizzBuzz',
  31,     32,     'Fizz',     34,     'Buzz', 'Fizz',
  37,     38,     'Fizz',     'Buzz', 41,     'Fizz',
  43,     44,     'FizzBuzz', 46,     47,     'Fizz',
  49,     'Buzz', 'Fizz',     52,     53,     'Fizz',
  'Buzz', 56,     'Fizz',     58,     59,     'FizzBuzz',
  61,     62,     'Fizz',     64,     'Buzz', 'Fizz',
  67,     68,     'Fizz',     'Buzz', 71,     'Fizz',
  73,     74,     'FizzBuzz', 76,     77,     'Fizz',
  79,     'Buzz', 'Fizz',     82,     83,     'Fizz',
  'Buzz', 86,     'Fizz',     88,     89,     'FizzBuzz',
  91,     92,     'Fizz',     94,     'Buzz', 'Fizz',
  97,     98,     'Fizz',     'Buzz'
]

function question1() {
  observed = [];
  //FIXME: Your code goes here
  for (i = 1; i < 101; i++){
    if ((i % 3 == 0) && (i % 5 == 0)) {
      observed.push('FizzBuzz');
    }
    else if (i % 3 == 0) {
      observed.push('Fizz');
    }
    else if (i % 5 == 0) {
      observed.push('Buzz');
    }
    else{
      observed.push(i);
    }
  }
  return observed;
}

observed = question1();

console.log('Question 1 passed:')
console.log(JSON.stringify(expected)==JSON.stringify(observed));
