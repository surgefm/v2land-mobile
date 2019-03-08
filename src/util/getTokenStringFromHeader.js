const findTokenString = RegExp.prototype.test.bind(/^sails\.sid/);

const getTokenStringFromHeader = (header) => {
  return header
    .get('set-cookie')
    .split(';')
    .find(findTokenString)
    .split('=')[1];
};

export default getTokenStringFromHeader;
