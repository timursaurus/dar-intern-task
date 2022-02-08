function plant(seed: string, water: number, fert: number, temp: number): string {
  const stem = '-'.repeat(water)
  const flower = seed.repeat(fert)
  return temp < 20 || temp > 30 ? stem.repeat(water) + seed : (stem + flower).repeat(water)
}


// console.log(plant("@", 3, 3, 25)) // ---@@@---@@@---@@@
// console.log(plant("#", 1, 5, 30)) // -#####
// console.log(plant("§", 3, 3, 15)) // ---------§
// console.log(plant("&", 5, 1, 20)) // -----&-----&-----&-----&-----& 


