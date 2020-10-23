import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card: {
        width: width / 2.8,
        height: height / 3.5,
        marginRight: 10,
        borderRadius: 5,
    },
    image: {
        height: "40%"
    },
    cardView: {
        padding: 5
    },
    body: {
        padding: 8
    },
    horizontalView: {
        flexDirection: 'row'
    },
    ratingView: {
        height: '10%'
    },
    title: {
        fontFamily: 'Asap-Regular',
    },
    caption: {
        fontFamily: 'Asap-Regular',
    },
    place: {
        fontFamily: 'Asap-Regular',
    },
    starView: {
        alignItems: 'flex-start'
    }
})

export default styles