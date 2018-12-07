import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fontSizes } from './fontSizes';

export default StyleSheet.create({
  pageTop: {
    paddingTop: 16,
  },
  containerStyle: {
    borderColor: colors.grey,
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  usernameContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 12,
  },
  username: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: {
    fontWeight: 'normal',
  },
  icon: {
    width: 40,
    textAlign: 'center',
    marginRight: 4,
  },
});
