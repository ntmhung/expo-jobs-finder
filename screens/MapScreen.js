/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
    state = {
        mapLoaded: false,
        region: {
            latitude: 37,
            longitude: -122,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
        }
    };

    componentDidMount(){
        this.setState({mapLoaded: true});
    }

    onRegionChangeComplete = (region) => {
        this.setState({region})
    };

    render(){
        if(!this.state.mapLoaded){
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
            </View>
        )
    }
}

export default MapScreen;