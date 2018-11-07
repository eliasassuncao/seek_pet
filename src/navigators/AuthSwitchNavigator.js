import {createSwitchNavigator} from 'react-navigation'
import {AppBottomTabNavigator} from './AppBottomTabNavigator'
import {LoginNavigator} from './LoginNavigator'
import {SYSTEM_ROUTES} from "../constants";

export const AuthSwitchNavigator = createSwitchNavigator(
    {
        [SYSTEM_ROUTES.LOGIN_AUTH_SCREEN.ROUTE]: LoginNavigator,
        [SYSTEM_ROUTES.APP_BOTTOM_TAB_NAVIGATOR.ROUTE]: AppBottomTabNavigator,
    },
    {
        initialRouteName: SYSTEM_ROUTES.LOGIN_AUTH_SCREEN.ROUTE,
    }
);