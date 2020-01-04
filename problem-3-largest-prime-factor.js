function largestPrimeFactor(number) {
  const numberFactors = new Set()
  const number_sqrRoot = Math.floor(Math.sqrt(number))
  let largestPrime = 0
  for (let factor = 1; factor <= number_sqrRoot; factor++) {
    if (number % factor === 0) {
      numberFactors.add(factor)
      numberFactors.add(number / factor)
    }
  }
  let number_factors = Array.from(numberFactors)
  number_factors.map(num => {
    const num_root = Math.floor(Math.sqrt(num))
    const dbl_factors = new Set()

    for (let factor = 1; factor <= num_root; factor++) {
      if (num % factor === 0) {
        dbl_factors.add(factor)
      }
    }
    if (dbl_factors.size === 1) {
      largestPrime = num
    }
  })
  console.log(largestPrime)
  return largestPrime
}

largestPrimeFactor(13195)
