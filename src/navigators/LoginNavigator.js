import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {RegisterAccountScreen, LoginAuthScreen} from "../screens";
import {SYSTEM_ROUTES} from "../constants";

export const LoginNavigator = createStackNavigator(
    {
        [SYSTEM_ROUTES.REGISTER_ACCOUNT_SCREEN.ROUTE]: {
            screen: RegisterAccountScreen,
            navigationOptions: () => ({
                headerBackTitle: 'Voltar',
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.LOGIN_AUTH_SCREEN.ROUTE]: {
            screen: LoginAuthScreen,
            navigationOptions: () => ({
                header: null
            })
        }
    },
    {
        initialRouteName: SYSTEM_ROUTES.LOGIN_AUTH_SCREEN.ROUTE,

        navigationOptions: {
            headerBackTitle: 'Voltar',
            headerTintColor: '#D4A452',
            headerStyle: {
                backgroundColor: '#ffffff',
            }
        },
    }
);