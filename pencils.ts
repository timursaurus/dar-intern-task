function colorPatternTimes(colors: string[]): number {
  const res = [colors[0]]
  return colors.forEach(color => res[res.length - 1] !== color && res.push(color)), res.length - 1 + colors.length * 2
}

console.log(colorPatternTimes(["Blue"])) // 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])) // 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])) // 13
