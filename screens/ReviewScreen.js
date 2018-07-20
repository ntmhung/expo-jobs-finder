/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {View, Text, Platform} from "react-native";
import {Button} from "react-native-elements";

class ReviewScreen extends Component {

    /**
     * 'static' keyword is used to define class properties, not instance properties.
     * class properties cannot access instance properties, ex. this.props
     * Ex: const reviewScreen = new ReviewScreen();
     *     console.log(reviewScreen.navigationOptions); //undefined
     *     console.log(ReviewScreen.navigationOptions); Object {}
     *
     *
     * TabNavigator and StackNavigator use navigationOptions to customize what to show, ex: back button
     * navigationOptions only available if is set for screen options in TabNavigator and StackNavigator
     */

    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Review Job',
        headerRight: <Button
            title="Settings"
            onPress={()=> {
                navigation.navigate('setting')
            }}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0,122,255,1)"
        />,
        headerStyle: {
            marginBottom: Platform.OS === "android" ? 24 : 0
        }
    });

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
            </View>
        )
    }
}

export default ReviewScreen;