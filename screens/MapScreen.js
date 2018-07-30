/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {Button} from "react-native-elements";
import {MapView} from "expo";
import {connect} from "react-redux";
import {fetchJobs} from "../actions";

class MapScreen extends Component {
    state = {
        mapLoaded: false,
        region: {
            latitude: 34.092529,
            longitude: -118.328764,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
        }
    };

    componentDidMount() {
        this.setState({mapLoaded: true});
    }

    onRegionChangeComplete = (region) => {
        this.setState({region})
    };

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck');
        });
    };

    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View>
                    <Button
                        large
                        title="Search This Area"
                        backgroundColor="#009688"
                        style={styles.buttonContainer}
                        icon={{name: 'search'}}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
};

export default connect(null, {fetchJobs})(MapScreen);