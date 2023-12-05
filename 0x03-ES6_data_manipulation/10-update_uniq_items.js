export default function updateUniqueItems(groceriesList) {
  if (!(groceriesList instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map(groceriesList);

  for (const [item, quantity] of updatedMap) {
    if (quantity === 1) {
      updatedMap.set(item, 100);
    }
  }

  return updatedMap;
}
