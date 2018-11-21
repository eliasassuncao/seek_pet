import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {
    ChooseHelpScreen, 
    PetSelectedHelpScreen, 
    RegisterHelpScreen, 
    NewCupomScreen,
    PetAdoptedScreen
} from "../screens";
import {SYSTEM_ROUTES} from "../constants";

export const HelpPetNavigator = createStackNavigator(
    {
        [SYSTEM_ROUTES.CHOOSE_HELP_SCREEN.ROUTE]: {
            screen: ChooseHelpScreen,
            navigationOptions: () => ({
                title: SYSTEM_ROUTES.CHOOSE_HELP_SCREEN.HEADER_TITLE
            })
        },
        [SYSTEM_ROUTES.NEW_CUPOM_SCREEN.ROUTE] : {
            screen: NewCupomScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.REGISTER_HELP_SCREEN.ROUTE]: {
            screen: RegisterHelpScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.PET_SELECTED_HELP_SCREEN.ROUTE]: {
            screen: PetSelectedHelpScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.PET_ADOPTED_SCREEN.ROUTE]: {
            screen: PetAdoptedScreen,
            navigationOptions: () => ({
                title: 'Voltar'
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