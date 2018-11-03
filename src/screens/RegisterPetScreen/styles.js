import {Dimensions, Platform, StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex', 
        alignItems: 'center', 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingBottom: 20
    },
    form: {
        width: '100%'
    },
    viewLocation: {
        marginTop: 20
    },
    textLocation: {
        textAlign: 'center', 
        fontSize: 18, 
        color: '#D4A452'
    },
    location: {
        textAlign: 'center', 
        fontSize: 15, 
        color: '#87A23D' 
    },
    buttonSubmit: {
        backgroundColor: '#D4A452',
        marginTop: 20
    }
   
});
