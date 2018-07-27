/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {AsyncStorage, View, Text} from "react-native";
import {connect} from "react-redux";
import {facebookLogin} from "../actions";


class AuthScreen extends Component {

    componentDidMount() {
        //facebookLogin is async
        this.props.facebookLogin();
        this.onAuthComplete(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props){
        if(props.token) {
            this.props.navigation.navigate('map');
        }
    }

    render() {
        return (
            <View/>
        )
    }
}

const mapStateToProps = auth => {
    return {token: auth.token};
};

export default connect(mapStateToProps, {facebookLogin})(AuthScreen);