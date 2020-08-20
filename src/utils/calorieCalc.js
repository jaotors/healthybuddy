export const calculateTotalCalories = ({ protein, fat, carb }, grams) => {
  const proteinCalories = protein * 4
  const fatCalories = fat * 9
  const carbCalories = carb * 4

  return (grams / 10) * (proteinCalories + fatCalories + carbCalories)
}
