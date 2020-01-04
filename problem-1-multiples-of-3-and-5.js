function multiplesOf3and5(number) {
  // Good luck!
  let total = 0
  for (let i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i
    }
  }
  console.log(total)
  return total
}

multiplesOf3and5(1000)
