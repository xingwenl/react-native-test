import {
    createStackNavigator
} from "react-navigation";
import DetailsScreen from './details'
import HomeScreen from './home'

const Home = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: {
        screen: DetailsScreen
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: gColor.mainColor
        }
    },
    navigationOptions: {
        tabBarLabel: 'Home'
    }
});
export default Home