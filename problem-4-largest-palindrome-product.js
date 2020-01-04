/*
Project Euler: Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
 */

function largestPalindromeProduct(n) {
  // Good luck!
  const low = 10 ** (n - 1)
  const high = 10 ** n - 1
  let largestPalindrom = 0
  for (let l = low; l <= high; l++) {
    for (let h = low; h <= high; h++) {
      const product = l * h
      const prod_string = ('' + product).split('')
      const reversed_prod = parseInt(prod_string.reverse().join(''))
      if (product === reversed_prod) {
        if (product > largestPalindrom) {
          largestPalindrom = product
        }
      }
    }
  }
  console.log(largestPalindrom)
  return largestPalindrom
}

largestPalindromeProduct(3)

/*
largestPalindromeProduct(2) should return 9009.
largestPalindromeProduct(3) should return 906609.
*/

/*
    for (let h = low; h <= high; h++) {
      let product = l * h


      const reversed_prod = parseInt(prod_string.reverse().join(''))
      console.log(`${l} X ${high} = ${product} Reversed is: ${reversed_prod}`)
      /*
      if (product == reversed_prod) {
        console.log(`${l} X ${high} = ${product} Reversed is: ${reversed_prod}`)
      }

    }
    */
