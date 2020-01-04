/*
Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
 */

function largestPrimeFactor(number) {
  // Good luck!

  let largestPrime = 0
  for (let num = 2; num <= number; num++) {
    if (number % num === 0) {
      const factors = []
      for (let factor = 2; factor <= num; factor++) {
        if (num % factor == 0) {
          factors.push(factor)
        }
      }
      if (factors.length === 1) {
        console.log(num)
        largestPrime = num
      }
    }
  }
  console.log(largestPrime)

  return true
}

largestPrimeFactor(7)

/*
largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFactor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.
*/
