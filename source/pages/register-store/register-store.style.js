import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
    },
  inputContainer: {
    paddingTop: 20,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  bodycontainer: {
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  underline: {
    borderBottomWidth: 0.5,
    borderColor: '#000'
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
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
})

export default styles