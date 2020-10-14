import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headerView: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    padding: 10
  },
  menu: {
    justifyContent: 'flex-start',
  },
  logo: {
    justifyContent: 'flex-end',
    height: 30,
    width: 30
  },
});
export default styles