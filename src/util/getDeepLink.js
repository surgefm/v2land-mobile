import {Platform} from 'react-native';
import querystring from 'querystring';

export const getDeepLink = (path = '', params) => {
  const scheme = 'v2land';
  const prefix =
    Platform.OS === 'android' ? `${scheme}://my-host/` : `${scheme}://`;
  if (path[0] === '/') {
    path = path.slice(1);
  }
  let link = prefix + path;
  if (params) {
    link += `?${querystring.stringify(params)}`;
  }
  return link;
};

export default getDeepLink;
