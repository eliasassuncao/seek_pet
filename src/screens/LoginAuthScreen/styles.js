import {StyleSheet} from "react-native";

export default StyleSheet.create({
    viewInput: {
        borderWidth: 1,
        borderRadius: 5, 
        borderColor: '#87A23D', 
        marginTop: 20, 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconInput: {
        color: '#D4A452'
    },
    container: {
        display: 'flex', 
        alignItems: 'center', 
        padding: 10
    },
    viewButtonRegister: {
        width: '100%'
    },
    buttonRegister: {
        marginLeft: 250
    },
    textRegister: {
        color: '#9F9F9F'
    },
    iconRegister: {
       color: '#D4A452' 
    },
    viewImage: {
        marginTop: 20
    },
    image: {
        width: 250, 
        height: 150
    },
    form: {
        width: '100%', 
        paddingLeft: 10, 
        paddingRight: 10
    },
    viewButtonLogin: {
        marginTop: 10
    },
    textForgotPassword: {
        color: '#87A23D'
    },
    buttonLogin: {
        backgroundColor: '#D4A452',
        marginTop: 10
    },
    textButtonLogin: {
        color: '#ffffff'
    }
});