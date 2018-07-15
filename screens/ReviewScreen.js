/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ReviewScreen extends Component {

    /**
     * 'static' keyword is used to define class properties, not instance properties.
     * Ex: const reviewScreen = new ReviewScreen();
     *     console.log(reviewScreen.navigationOptions); //undefined
     *     console.log(ReviewScreen.navigationOptions); Object {}
     *
     *
     * TabNavigator and StackNavigator use navigationOptions to customize what to show, ex: back button
     */

    static navigationOptions = {

    };

    render(){
        return (
            <View>
                <Text>ReviewScreen</Text>
            </View>
        )
    }
}

export default ReviewScreen;