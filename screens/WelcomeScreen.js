/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import { View, Text} from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
    {text: 'Welcome to Job Finder'},
    {text: 'We will help you find the jobs around your location'},
    {text: 'Set your location, then swipe away'}
];

class WelcomeScreen extends Component {

    static navigationOptions = {
        tabBarVisible: false
    };

    render() {
        return (
            <Slides data={SLIDE_DATA}/>
        )
    }
}

export default WelcomeScreen;