import { StyleSheet } from 'react-native';
import { paddingConstants } from './paddings';

export const pageStyle = StyleSheet.create({
  default: {
    backgroundColor: '#FFF',
    paddingTop: paddingConstants.top,
    paddingLeft: paddingConstants.side,
    paddingRight: paddingConstants.side,
    paddingBottom: paddingConstants.bottom,
  },
  background: {
    backgroundColor: '#FFF',
  },
});

export default pageStyle;
