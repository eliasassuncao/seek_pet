import {createSwitchNavigator} from 'react-navigation'
import {AppBottomTabNavigator} from './AppBottomTabNavigator'
import {SYSTEM_ROUTES} from "../constants";
import { LoginAuthScreen } from '../screens';

export const AuthSwitchNavigator = createSwitchNavigator(
    {
        [SYSTEM_ROUTES.LOGIN_AUTH_SCREEN.ROUTE]: LoginAuthScreen,
        [SYSTEM_ROUTES.APP_BOTTOM_TAB_NAVIGATOR.ROUTE]: AppBottomTabNavigator,
    },
    {
        initialRouteName: SYSTEM_ROUTES.LOGIN_AUTH_SCREEN.ROUT,
    }
);