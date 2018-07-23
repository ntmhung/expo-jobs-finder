import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import {Provider} from "react-redux";
import stores from "./stores";
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingScreen from "./screens/SettingScreen";

export default class App extends React.Component {
    render() {
        const MainNavigator = createBottomTabNavigator({
            welcome: {screen: WelcomeScreen},
            auth: {screen: AuthScreen},
            main: {
                screen: createBottomTabNavigator({
                    map: {screen: MapScreen},
                    deck: {screen: DeckScreen},
                    review: createStackNavigator({
                        review: {screen: ReviewScreen},
                        setting: {screen: SettingScreen},
                    })
                })
            }
        });


        return (
            <Provider store={stores}>
                <MainNavigator />
            </Provider>
        );
    }
}
