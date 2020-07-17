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

export default getDateAndTime;
