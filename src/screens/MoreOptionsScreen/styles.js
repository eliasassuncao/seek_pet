import {StyleSheet,Platform} from "react-native";

export default StyleSheet.create({
    listItem: {
        minHeight: 55,
        height: 55,
    },
    listItemBody: {
        minHeight: 55,
        height: 55,
    },
    iconColor: {
        backgroundColor: '#D4A452'
    },
    textColor: {
        color: '#87A23D'
    },
    itemHeaderPhoto: {
        flexDirection: 'column',
        marginLeft: 0,
        marginTop: 26,
    },
    itemHeaderPhotoBody: {
        marginLeft: 0,
        borderBottomColor: 'transparent'
    },
    thumbnail: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    itemHeaderPhotoText: {
        fontFamily: Platform.OS === 'ios' ? 'Segoe UI' : 'Segoe_UI_Regular',
        marginRight: 0,
        textAlign: 'center',
    },
    itemHeaderPhotoNote: {
        marginRight: 0,
        fontFamily: Platform.OS === 'ios' ? 'Segoe UI' : 'Segoe_UI_Regular',
        textAlign: 'center',
    },
});
