import { createBottomTabNavigator, createAppContainer } from  "react-navigation";
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from './home/index'
import Market from './market/index'
import Account from './account/index'
import Fund from './fund/index'
 

const tabIconName = {
    Home: 'home',
    Market: 'list',
    Fund: 'suitcase',
    Account: 'user'
}


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Market: {
        screen: Market
    },
    Fund: {
        screen: Fund
    },
    Account: {
        screen: Account
    },
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#0f49a8', //活动选项卡的标签和图标颜色
        inactiveTintColor: '#999999',
        labelStyle: {
            fontSize: 12
        }
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state
            return <Icon name={tabIconName[routeName]} size={horizontal ? 20 : 25} color={tintColor}></Icon>
        }
    })
})
const AppContainer = createAppContainer(TabNavigator);
export default AppContainer