import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backGroundColor,
  },
  innerContainer: {
    margin: 15,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    width: '100%',
    marginTop: 25,
    fontFamily: 'Asap-SemiBold',
    textAlign: 'center',
  },
  accountText: {
    fontSize: 16,
    fontFamily: 'Asap-Regular',
    marginBottom: 25,
    textAlign: 'center',
  },
});

export default styles;
