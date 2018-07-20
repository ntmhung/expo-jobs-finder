/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {View, Text} from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
    {text: 'Welcome to Job Finder', color: '#03A9F4'},
    {text: 'We will help you find the jobs around your location', color: '#009688'},
    {text: 'Set your location, then swipe away', color: '#03A9F4'}
];

class WelcomeScreen extends Component {

    static navigationOptions = {
        tabBarVisible: false
    };

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    };

    render() {
        return (
            <Slides
                data={SLIDE_DATA}
                onComplete={this.onSlidesComplete}
            />
        )
    }
}

export default WelcomeScreen;