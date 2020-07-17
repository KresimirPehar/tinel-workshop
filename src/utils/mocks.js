const getWorkshopItems = (number) => {
  let workshopState = {
    workshops: {
      workshopsData: {},
    },
  };
  for (let i = 0; i < number; i += 1) {
    const newItem = {
      [i]: {
        id: i,
      },
    };
    workshopState = {
      workshops: {
        workshopsData: {
          ...workshopState.workshops.workshopsData,
          ...newItem,
        },
      },
    };
  }
  return workshopState;
};

export default getWorkshopItems;
