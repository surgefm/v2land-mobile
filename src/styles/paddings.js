import { StyleSheet } from 'react-native';

export const paddingConstants = {
  top: 50,
  side: 16,
  bottom: 30,
  interval: 8,
  largeInterval: 32,
};

export const paddings = StyleSheet.create({
  interval: { paddingBottom: paddingConstants.interval },
  largeInterval: { paddingBottom: paddingConstants.largeInterval },
  side: { paddingHorizontal: paddingConstants.side },
  pageTop: { paddingTop: paddingConstants.top },
});
