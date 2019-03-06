import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fontSizes } from './fontSizes';

export default StyleSheet.create({
  section: {
    paddingTop: 16,
  },
  username: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: {
    fontWeight: 'normal',
  },
  description: {
    fontSize: 16,
    fontFamily: 'SourceHanSansCN-Regular',
    lineHeight: 18,
  },
  icon: {
    width: 32,
    textAlign: 'center',
    color: colors.theme,
  },
});
