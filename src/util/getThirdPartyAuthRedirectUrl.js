import getDeepLink from './getDeepLink';

const getThirdPartyAuthRedirectUrl = (redirect) => {
  return getDeepLink('/profile/third-party-authorization', { redirect });
};

export default getThirdPartyAuthRedirectUrl;
