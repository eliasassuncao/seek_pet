import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {SYSTEM_ROUTES} from "../constants";
import { 
    RegisterPetScreen, 
    CompatiblePetsScreen, 
    NewCupomScreen, 
    CompatiblePetDetailsScreen,
    GatherInformationCompatibleScreen
} from '../screens';

export const InformPetNavigator = createStackNavigator(
    {
        [SYSTEM_ROUTES.REGISTER_PET_SCREEN.ROUTE]: {
            screen: RegisterPetScreen,
            navigationOptions: () => ({
                title: SYSTEM_ROUTES.REGISTER_PET_SCREEN.HEADER_TITLE
            })
        },
        [SYSTEM_ROUTES.COMPATIBLE_PET_DETAILS.ROUTE]: {
            screen: CompatiblePetDetailsScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.COMPATIBLE_PETS_SCREEN.ROUTE]: {
            screen: CompatiblePetsScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.NEW_CUPOM_SCREEN.ROUTE]: {
            screen: NewCupomScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            })
        },
        [SYSTEM_ROUTES.GATHER_INFORMATION_COMPATIBLE_SCREEN.ROUTE]: {
            screen: GatherInformationCompatibleScreen,
            navigationOptions: () => ({
                title: 'Voltar'
            }) 
        }
    },
    {
        initialRouteName: SYSTEM_ROUTES.REGISTER_PET_SCREEN.ROUTE,

        navigationOptions: {
            headerBackTitle: 'Voltar',
            headerTintColor: '#D4A452',
            headerStyle: {
                backgroundColor: '#ffffff',
            }
        },
    }
);