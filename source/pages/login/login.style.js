import {StyleSheet} from 'react-native'

import {Color} from '../../assets/color/color.assets'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGroundColor,
    },
    innerContainer: {
      padding: 10,
        backgroundColor: Color.backGroundColor,
        marginTop: 100
    },
  inputContainer: {
    paddingTop: 15,
  },
  buttonContainer: {
    paddingTop: 15,
  },
  forgotPassView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 18
  },
  forgotPassword: {
      fontSize: 14,
      color: Color.grey
  },
  accountView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  },
  accountText: {
      fontSize: 15
  },
  createAcTouch: {
      flexDirection: 'row'
  },
  createTxt: {
    fontSize: 15
  },
  createTouchTxt: {
      color: Color.primaryColor, 
      fontSize: 15
  },
  loginText: {
      fontSize: 17,
      marginTop: 20
  },
  title: {
      fontSize: 17,
      width: "75%",
      marginTop: 15
  }
})

export default styles