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
  }
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
