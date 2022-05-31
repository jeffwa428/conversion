const POUND_KG_CONVERSION_RATE = 0.453592;
const METER_FEET_CONVERSION_RATE = 3.28084;

export const poundsToKilograms = (pounds: number): number => {
  return parseFloat((pounds * POUND_KG_CONVERSION_RATE).toFixed(3));
}

export const kilogramsToPounds = (kilograms: number): number => {
  return parseFloat((kilograms / POUND_KG_CONVERSION_RATE).toFixed(3));
}

export const metersToFeets = (meters: number): number => {
  return parseFloat((meters * METER_FEET_CONVERSION_RATE).toFixed(3));
}

export const feetsToMeters = (feets: number): number => {
  return parseFloat((feets / METER_FEET_CONVERSION_RATE).toFixed(3));
}