import { StyleSheet } from 'react-native';
import fontSizes from './fontSizes';
import colors from './colors';
import { buttonStyle, buttonTextStyle } from './buttons';
import { paddingConstants, paddings } from './paddings';
import { pageStyle } from './pageStyle';
import { searchBarStyle } from './searchBarStyle';
import loginStyle from './loginStyle';
import profileStyle from './profileStyle';

export const commonStyle = StyleSheet.create({
  eventTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'SourceHanSerifCN-Semibold',
  },
  noSideMargins: {
    marginLeft: 0,
    marginRight: 0,
  },
});

export const buttonStyles = StyleSheet.create({
  goBackButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});

export {
  fontSizes,
  colors,
  buttonStyle,
  buttonTextStyle,
  paddingConstants,
  paddings,
  searchBarStyle,
  pageStyle,
  loginStyle,
  profileStyle,
};

export default commonStyle;
