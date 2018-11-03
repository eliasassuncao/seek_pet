import React from 'react'
import {View} from 'react-native'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {SYSTEM_ROUTES} from "../constants";
import {TabBarIcon} from "../components";
import {InformPetNavigator} from "./InformPetNavigator";
import {HelpPetNavigator} from "./HelpPetNavigator";
import {MoreOptionsStackNavigator} from "./MoreOptionsStackNavigator";

export const AppBottomTabNavigator = createMaterialBottomTabNavigator(
    {
        
        [SYSTEM_ROUTES.HELP_PET_STACK_NAVIGATOR.ROUTE]: {
            screen: HelpPetNavigator,
            navigationOptions: {
                title: SYSTEM_ROUTES.HELP_PET_STACK_NAVIGATOR.BOTTOM_LABEL,
                tabBarIcon: (props) => <TabBarIcon type="MaterialIcons" name="pets" {...props}/>,
                tabBarColor: '#D4A452'
            }
        },
        [SYSTEM_ROUTES.INFORM_PET_STACK_NAVIGATOR.ROUTE]: {
            screen: InformPetNavigator,
            navigationOptions: {
                title: SYSTEM_ROUTES.INFORM_PET_STACK_NAVIGATOR.BOTTOM_LABEL,
                tabBarIcon: (props) => <TabBarIcon type="MaterialIcons" name="info" {...props}/>,
                tabBarColor: '#D4A452'
            }
        },
        [SYSTEM_ROUTES.MORE_OPTIONS_STACK_NAVIGATOR.ROUTE]: {
            screen: MoreOptionsStackNavigator,
            navigationOptions: {
                title: SYSTEM_ROUTES.MORE_OPTIONS_STACK_NAVIGATOR.BOTTOM_LABEL,
                tabBarIcon: (props) => <TabBarIcon type="MaterialIcons" name="menu" {...props}/>,
                tabBarColor: 'black'
            }
        },
    },
    {
        initialRouteName: SYSTEM_ROUTES.INFORM_PET_STACK_NAVIGATOR.ROUTE,
        navigationOptions: {
            activeTintColor: '#ffffff',
            barStyle: { backgroundColor: '#D4A452' },
        }
    }
);