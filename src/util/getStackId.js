const getStackId = (item) => {
  let stackId = item.stackId;
  if (!stackId && item.stack) {
    stackId = typeof item.stack === 'number' ? item.stack : item.stack.id;
  }
  return stackId;
};

export default getStackId;
