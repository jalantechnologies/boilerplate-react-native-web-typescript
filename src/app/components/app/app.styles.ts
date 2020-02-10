import {StyleSheet, ViewStyle, ImageStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  logo: ImageStyle;
  menu: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height:100,
    width:100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'center',
  },
  menu: {
    padding: 10,
  },
});
