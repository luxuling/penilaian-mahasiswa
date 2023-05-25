const createOptionValue = (maxValue) => {
  const max = [];
  for (let i = 1; i <= maxValue; i++) {
    max.push(i);
  }
  return max;
};

export default createOptionValue;
