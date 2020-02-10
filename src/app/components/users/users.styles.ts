import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  h1: TextStyle;
  usersList: ViewStyle;
}

export default StyleSheet.create<Style>({
  h1: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  usersList: {
    marginTop: 10,
    borderWidth: 1,
    paddingTop: 10,
  }
});
