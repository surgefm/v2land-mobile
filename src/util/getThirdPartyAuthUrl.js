import config from '../config/const';
import getThirdPartyAuthRedirectUrl from './getThirdPartyAuthRedirectUrl';

const getThirdPartyAuthUrl = (site, redirect) => {
  redirect = getThirdPartyAuthRedirectUrl(redirect);
  return `${config.api}auth/${site}?redirect=${redirect}`;
};

export default getThirdPartyAuthUrl;
