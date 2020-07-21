const getDateAndTime = (input) => {
  const date = new Date(input);
  const convertedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;
  const convertedTime = `${`0${date.getHours()}`.slice(
    -2
  )}:${`0${date.getMinutes()}`.slice(-2)}h`;
  return {
    date: convertedDate,
    time: convertedTime,
  };
};

const filterByCategory = (workshops, filter) => {
  const filteredWorkshops = Object.keys(workshops).reduce((obj, key) => {
    if (filter.includes(workshops[key].category)) {
      const initElement = obj;
      initElement[key] = workshops[key];
      return initElement;
    }
    return obj;
  }, {});
  return filteredWorkshops;
};

export { getDateAndTime, filterByCategory };
