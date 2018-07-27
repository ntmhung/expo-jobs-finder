/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {View, Text, AsyncStorage} from "react-native";
import {AppLoading} from "expo";
import _ from "lodash";
import Slides from "../components/Slides";

const SLIDE_DATA = [
    {text: 'Welcome to Job Finder', color: '#03A9F4'},
    {text: 'We will help you find the jobs around your location', color: '#009688'},
    {text: 'Set your location, then swipe away', color: '#03A9F4'}
];

class WelcomeScreen extends Component {
    state = {token: null};

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            this.setState({token: true});
            this.props.navigation.navigate('map');
        } else {
            this.setState({token: false});
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    };

    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading/>;
        }
        if(!this.state.token){
            return (
                <Slides
                    data={SLIDE_DATA}
                    onComplete={this.onSlidesComplete}
                />
            )
        }
        return <View/>;
    }
}

export default WelcomeScreen;