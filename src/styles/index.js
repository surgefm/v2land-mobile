import { StyleSheet } from 'react-native';
import fontSizes from './fontSizes';
import colors from './colors';
import { paddingConstants, paddings } from './paddings';
import { pageStyle } from './pageStyle';
import { searchBarStyle } from './searchBarStyle';

export const styles = StyleSheet.create({
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
  },
});

export const buttonStyles = StyleSheet.create({
  goBackButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});

export default styles;
export {
  fontSizes,
  colors,
  paddingConstants,
  paddings,
  searchBarStyle,
  pageStyle,
};
