/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from 'react';
import {Platform, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {clearLikedJobs} from '../actions';

class SettingScreen extends Component {
    //fix overlapped header and status bar on Android
    static navigationOptions = {
        headerStyle: {
            marginTop: Platform.OS === 'android' ? 24 : 0
        }
    };

    render(){
        return (
            <View>
                <Button
                    title="Reset Liked Jobs"
                    large
                    icon={{name: 'delete-forever'}}
                    backgroundColor="#F44336"
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        )
    }
}



export default connect(null, {clearLikedJobs})(SettingScreen);