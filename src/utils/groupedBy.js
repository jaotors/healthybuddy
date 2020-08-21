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

    return uniqArray;
  }
};

const groupedBy = (by = '', list = []) => {
  const mappedList = list.map((m) => m[by]);
  const uniqList = getUniq(mappedList);

  const transformedList = uniqList.map((mealTime) => {
    return {
      time: mealTime,
      meal: list
        .filter((l) => l[by] === mealTime)
        .map((f) => ({
          food: f.food,
          calories: f.calories,
        })),
    };
  });

  return transformedList;
};

export default groupedBy;
