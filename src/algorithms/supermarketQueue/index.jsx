function createTills(count) {
  const tills = {};
  for (let i = 1; i <= count; i++) {
    tills[i] = 0;
  }
  return tills;
}

function getMinKey(tills) {
  const values = Object.values(tills);
  const [minValue] = values.sort((a, b) => a - b);
  for (const [key, value] of Object.entries(tills)) {
    if (value === minValue) {
      return key;
    }
  }
}

function getMaxValue(filledTills) {
  const values = Object.values(filledTills);
  const maxValue = values.sort((a, b) => a - b)[values.length - 1];
  return maxValue;
}

function addItem(queue, tills) {
  const tillsCopy = { ...tills }; // is it ok? Maybe it's better to mutate tills?
  queue.forEach((item) => {
    const minKey = getMinKey(tillsCopy);
    tillsCopy[minKey] += item;
  });
  return tillsCopy;
}

export function getQueueTime(queue, tillsCount) {
  const tills = createTills(tillsCount);
  const filledTills = addItem(queue, tills);
  const maxValue = getMaxValue(filledTills);
  return maxValue;
}
