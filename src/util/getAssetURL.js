import config from '../config/const';

const getAssetURL = (relativePath, {width, height} = {}) => {
  if (width && height) {
    return `${config.cdn}${width}x${height}/${relativePath}`;
  }
  return config.cdn + relativePath;
};

export default getAssetURL;
