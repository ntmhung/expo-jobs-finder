/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {AsyncStorage, View, Text} from "react-native";
import {connect} from 'react-redux';
import {facebookLogin} from '../actions';


class AuthScreen extends Component {

    componentDidMount(){
        this.props.facebookLogin();
        AsyncStorage.removeItem('fb_token');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
            </View>
        )
    }
}



export default connect(null, facebookLogin)(AuthScreen);