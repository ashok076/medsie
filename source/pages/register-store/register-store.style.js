import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets'

const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.backGroundColor,
        padding: 10
    },
  inputContainer: {
    paddingTop: 20,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  underline: {
    borderBottomWidth: 0.5,
    borderColor: '#000',
    fontFamily: 'Asap-Regular',
    color: Color.grey
  },
  rowD: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  uploadImageView: {
    borderStyle: 'dashed',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    paddingBottom: 20,
    fontFamily: 'Asap-SemiBold'
  },
  uploadImageTxt: {
    fontFamily: 'Asap-Regular',
    color: Color.grey
  },
  text: {
    fontFamily: 'Asap-Regular',
    color: Color.grey
  },
  contain: {
    backgroundColor: 'white',
        padding: 10
  },
  toasttxt: {
    fontFamily: 'Asap-Regular',
  }
})

export default styles