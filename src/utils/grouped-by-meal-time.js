/* 
plan: [
  {
    time: 'breakfast',
    meal: [
      {
        food: food,
        calories: calories
      }
    ]
  }
]
*/

const getUniq = (array) => {
  let uniqArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqArray.indexOf(array[i]) === -1) {
      uniqArray.push(array[i]);
    }
  }
  return uniqArray;
};

const groupedByMealTime = (list = []) => {
  const mappedList = list.map((m) => m.meal_time);
  const uniqList = getUniq(mappedList)
    .map((i) => {
      if (i.toLowerCase() === 'breakfast') return [i, 1];
      if (i.toLowerCase() === 'lunch') return [i, 2];
      if (i.toLowerCase() === 'dinner') return [i, 3];

      return [i, 4];
    })
    .sort((a, b) => a[1] - b[1])
    .map((i) => i[0]);

  const transformedList = uniqList.map((mealTime) => {
    return {
      time: mealTime,
      meal: list
        .filter((l) => l.meal_time === mealTime)
        .map((f) => ({
          food: f.food,
          calories: f.calories,
        })),
    };
  });
  return transformedList;
};

export default groupedByMealTime;
