import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    color: '#000000',
    fontFamily: 'PublicSans-Regular',
    padding: 15,
    flex: 1,
    fontSize: 17
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 0.5,
    height: 50,
    width: '100%',
    borderRadius: 5,
  },
  iconStyle: {
    margin: 15,
  },
  placeholder:  {
    fontSize: 18,
  },
});

export default styles;
