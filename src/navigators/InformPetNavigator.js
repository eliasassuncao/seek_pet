import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {SYSTEM_ROUTES} from "../constants";
import { RegisterPetScreen } from '../screens';

export const InformPetNavigator = createStackNavigator(
    {
        [SYSTEM_ROUTES.REGISTER_PET_SCREEN.ROUTE]: {
            screen: RegisterPetScreen,
            navigationOptions: () => ({
                title: SYSTEM_ROUTES.REGISTER_PET_SCREEN.HEADER_TITLE
            })
        },
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