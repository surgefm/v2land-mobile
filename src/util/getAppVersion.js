import DeviceInfo from 'react-native-device-info';

const getAppVersion = () => {
  return `${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`;
};

export default getAppVersion;
