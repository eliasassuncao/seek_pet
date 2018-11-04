import {Dimensions, Platform, StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    viewBody: {
        paddingTop: 20,
    },
    textCongratulations: {
        color: '#D4A452',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500'
    },
    textBody: {
        textAlign: 'center',
        color: '#9F9F9F',
        fontSize: 16
    },
    image: {
        marginTop: 20
    },
    viewTextCupom: {
        display: 'flex', 
        flexDirection: 'row'
    },
    textCupom: {
        fontSize: 16,
        color: '#87A23D'
    },
    textCupomCenter: {
        fontSize: 16,
        color: '#9F9F9F'
    },
    lastView: {
        display: 'flex', 
        flexDirection: 'row',
        paddingTop: 20,
    },
    buttonSubmit: {
        backgroundColor: '#D4A452',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    textButtonSubmit: {
        color: '#ffffff'
    }
    
});
