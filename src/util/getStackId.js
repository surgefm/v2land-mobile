const getStackId = (item) => {
  let stackId = item.stackId;
  if (!stackId && item.stack) {
    stackId = typeof item.stack === 'object' ? item.stack.id : item.stack;
  }
  return stackId;
};

export default getStackId;
