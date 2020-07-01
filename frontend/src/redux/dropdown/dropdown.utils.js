export const addItemTofavs = (favItems, favItemToAdd) => {
  const existingFavItem = favItems.find(
    (favItem) => favItem.id === favItemToAdd.id
  );

  if (existingFavItem) {
    return favItems.filter((favItem) => favItem !== favItemToAdd);
  }
  return [...favItems, { ...favItemToAdd, count: 1 }];
};
