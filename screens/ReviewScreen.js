/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {ScrollView, View, Text, Platform, Linking} from "react-native";
import {MapView} from 'expo';
import {Card, Button} from "react-native-elements";
import {connect} from "react-redux";
import {parseTime} from "../helpers";

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

    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
            const {company, created_at, url, latitude, longitude, title, id} = job;
            const initialRegion = {
                latitude,
                longitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return (
                <Card title={title} key={id}>
                    <View style={{height: 200}}>
                        <MapView
                            style={{flex: 1}}
                            cacheEnabled={Platform.OS === 'android'}
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italic}>{company}</Text>
                            <Text style={styles.italic}>{parseTime(created_at)}</Text>
                        </View>
                        <Button
                            title="Apply"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        )
    }
}

const styles = {
    detailWrapper: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    italic: {
        fontStyle: 'italic'
    }
};

function mapStateToProps(state) {
    return {likedJobs: state.likedJobs};
}

export default connect(mapStateToProps)(ReviewScreen);