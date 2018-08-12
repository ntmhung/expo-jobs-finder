import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import {Icon} from "react-native-elements";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import stores from "./stores";
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingScreen from "./screens/SettingScreen";

export default class App extends React.Component {
    render() {
        /**
         * Whenever react-navigation render a navigator, it instantly renders every single screen within the navigator
         */
        const reviewNavigator = createStackNavigator({
            review: {screen: ReviewScreen},
            setting: {screen: SettingScreen},
        });
        reviewNavigator.navigationOptions = {
            title: "Review",
            tabBarIcon: ({tintColor}) => {
                return <Icon
                    name="favorite"
                    size={30}
                    color={tintColor}
                />
            }
        };
        const MainNavigator = createBottomTabNavigator(
            {
                welcome: {screen: WelcomeScreen},
                auth: {screen: AuthScreen},
                main: {
                    screen: createBottomTabNavigator({
                        map: {screen: MapScreen},
                        deck: {screen: DeckScreen},
                        review: reviewNavigator
                    }, {
                        tabBarPosition: 'bottom',
                        //disable Swipe feature on Android
                        swipeEnabled: false,
                        tabBarOptions: {
                            labelStyle: {fontSize: 12}
                        }
                    })
                }
            }, {
                navigationOptions: {
                    tabBarVisible: false
                },
                /*
                 * Use to not load up any other screen until actually to go there, the opposite is exactly the same.
                 * When user navigate to another screen, react-navigation will not attempt to stop rendering the screen
                 * just came from
                 */
                lazy: true
            }
        );


        return (
            <Provider store={stores.store}>
                <PersistGate loading={null} persistor={stores.persistor}>
                    <MainNavigator />
                </PersistGate>
            </Provider>
        );
    }
}
