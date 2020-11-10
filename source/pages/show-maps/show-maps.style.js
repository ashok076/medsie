import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  content: {
    padding: 5,
  },

  contentSubheading: {
    marginBottom: 2,
    fontSize: 16,
    fontWeight: '600',
    color: '#ccc',
  },

  contentHeading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },

  contentDescription: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666',
  },
  modalizeContent: {
    zIndex: 5,
    marginTop: 'auto',
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    elevation: 4,
  },
  handle: {
    alignSelf: 'center',
    top: 8,
    width: 45,
    height: 0,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  handleCustom: {
    alignSelf: 'center',
    top: 8,
    width: 45,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#000',
  },
    modalize: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
  container: {
    flex: 1
  },
  map: {
    height: '100%'
  }
});

export default styles;