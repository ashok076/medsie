import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backGroundColor,
  },
  back: {
    marginLeft: 10,
  },
  innerContainer: {
    margin: 10,
  },
  resultContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  titleView: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    marginLeft: 15,
    fontFamily: 'Asap-Regular',
  },
  rowObject: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
