# Dar internship task
---
## First

```ts
function colorPatternTimes(colors: string[]): number {
  const res = [colors[0]]
  return colors.forEach(color => res[res.length - 1] !== color && res.push(color)), res.length - 1 + colors.length * 2
}
```

```ts
console.log(colorPatternTimes(["Blue"])) //=> 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])) //=> 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])) //=> 13

```
---


## Second

```ts
function plant(seed: string, water: number, fert: number, temp: number): string {
  const stem = '-'.repeat(water)
  const flower = seed.repeat(fert)
  return temp < 20 || temp > 30 ? stem.repeat(water) + seed : (stem + flower).repeat(water)
}
```

```ts
console.log(plant("@", 3, 3, 25)) //=> ---@@@---@@@---@@@
console.log(plant("#", 1, 5, 30)) //=> -#####
console.log(plant("§", 3, 3, 15)) //=> ---------§
console.log(plant("&", 5, 1, 20)) //=> -----&-----&-----&-----&-----&

```
---
### More readable version of the first solution
```ts
function colorPatternTimes(colors: string[]): number {
  const res = [colors[0]]
  colors.forEach(color => {
    if (res[res.length - 1] !== color) {
      res.push(color)
    }
  })
  return res.length - 1 + colors.length * 2
}
```