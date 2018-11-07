import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {MoreOptionsScreen, HelpAndDonationsScreen, CuponsListScreen, RegisterAccountScreen} from "../screens";
import {SYSTEM_ROUTES} from "../constants";
export const MoreOptionsStackNavigator = createStackNavigator(
    {
        [SYSTEM_ROUTES.MORE_OPTIONS_SCREEN.ROUTE]: {
            screen: MoreOptionsScreen,
            navigationOptions: () => ({
                title: SYSTEM_ROUTES.MORE_OPTIONS_SCREEN.HEADER_TITLE
            })
        },
        [SYSTEM_ROUTES.HELP_AND_DONATION_SCREEN.ROUTE]: {
            screen: HelpAndDonationsScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.CUPONS_LIST_SCREEN.ROUTE]: {
            screen: CuponsListScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.REGISTER_ACCOUNT_SCREEN.ROUTE]: {
            screen: RegisterAccountScreen,
            navigationOptions: () => ({
                title: 'Voltar'
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