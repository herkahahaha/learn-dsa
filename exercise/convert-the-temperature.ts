/*
formula 
farenheit = 1.8* celcius + 32
kelvin = 273.3 + celcius

output= [kelvin, farenheit]
*/

export function convertTemperature(celsius: number): number[] {
  return [273.15 + celsius, 1.8 * celsius + 32];
}
