import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets'

const styles = StyleSheet.create({
  input: {
    color: '#000000',
    fontFamily: 'PublicSans-Regular',
    padding: 12,
    flex: 1,
    fontSize: 17
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 0.5,
    height: 48,
    width: '100%',
    borderRadius: 5,
    borderColor: Color.grey,
  },
  iconStyle: {
    margin: 15,
  },    
  placeholder:  {
        fontSize: 16,
        color: Color.grey
    },
});

export default styles;
