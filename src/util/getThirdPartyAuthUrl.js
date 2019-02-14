import config from '../config/const';
import { Linking } from 'expo';

const getThirdPartyAuthUrl = (site, redirect) => {
  redirect = encodeURIComponent(Linking.makeUrl('/profile/third-party-authorization?'), { redirect });
  return `${config.api}auth/${site}?redirect=${redirect}`;
};

export default getThirdPartyAuthUrl;
