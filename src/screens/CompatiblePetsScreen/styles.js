import {Dimensions, Platform, StyleSheet} from 'react-native'

export default StyleSheet.create({
    viewHeader: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        color: '#D4A452'
    },
    viewSubTitle: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5
    },
    subTitle: {
        fontSize: 15,
        color: '#9F9F9F'
    },
    bodyText: {
        fontSize: 16,
        color: '#D4A452'
    },
    viewButtonSubmit: {
        padding: 20
    },
    buttonSubmit: {
        backgroundColor: '#D4A452',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    }
});
