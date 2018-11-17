import { StyleSheet } from 'react-native';
import colors from './colors';

export const buttonStyle = StyleSheet.create({
  button: {
    height: 45,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginLeft: 0,
    marginRight: 0,
  },
  outline: {
    backgroundColor: '#fff',
    borderColor: colors.blue,
  },
  primary: {
    backgroundColor: colors.blue,
  },
});

export const buttonTextStyle = StyleSheet.create({
  button: {
    fontSize: 16,
  },
  outline: {
    color: colors.blue,
  },
});
