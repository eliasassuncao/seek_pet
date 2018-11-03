import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {ChooseHelp} from "../screens";
import {SYSTEM_ROUTES} from "../constants";

export const HelpPetNavigator = createStackNavigator(
    {
        [SYSTEM_ROUTES.CHOOSE_HELP_SCREEN.ROUTE]: {
            screen: ChooseHelp,
            navigationOptions: () => ({
                title: SYSTEM_ROUTES.CHOOSE_HELP_SCREEN.HEADER_TITLE
            })
        },
    },
    {
        initialRouteName: SYSTEM_ROUTES.CHOOSE_HELP_SCREEN.ROUTE,

        navigationOptions: {
            headerBackTitle: 'Voltar',
            headerTintColor: '#D4A452',
            headerStyle: {
                backgroundColor: '#ffffff',
            }
        },
    }
);