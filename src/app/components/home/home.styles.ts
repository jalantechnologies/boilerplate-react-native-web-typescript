import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  error: TextStyle;
  container: ViewStyle;
  input: ViewStyle;
  h1: TextStyle;
}

export default StyleSheet.create<Style>({
  h1: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  container: {
    width: 300,
    margin: 'auto'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
