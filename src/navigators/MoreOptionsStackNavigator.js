import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {MoreOptionsScreen} from "../screens";
import {SYSTEM_ROUTES} from "../constants";
export const MoreOptionsStackNavigator = createStackNavigator(
    {
        [SYSTEM_ROUTES.MORE_OPTIONS_SCREEN.ROUTE]: {
            screen: MoreOptionsScreen,
            navigationOptions: () => ({
                title: SYSTEM_ROUTES.MORE_OPTIONS_SCREEN.HEADER_TITLE
            })
        },
        /*
        [SYSTEM_ROUTES.SEARCH_SELECT_SCREEN.ROUTE]: {
            screen: SearchSelectScreen,
            navigationOptions: ({navigation}) => ({
                title: navigation.state.params.label,
                headerStyle: {
                    backgroundColor: theme.primary.contrastText,
                },
                headerTintColor: theme.primary.default,
            })
        }
        */
    },
    {
        initialRouteName: SYSTEM_ROUTES.MORE_OPTIONS_SCREEN.ROUTE,

        navigationOptions: {
            headerBackTitle: 'Voltar',
            headerTintColor: '#D4A452',
            headerStyle: {
                backgroundColor: '#ffffff',
            }
        },
    }
);