/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {View, Text, Platform} from "react-native";
import {connect} from "react-redux";
import {MapView} from "expo";
import {Card, Button} from "react-native-elements";
import Swipe from "../components/Swipe";
import {parseTime} from "../helpers";
import {likeJob} from '../actions';

class DeckScreen extends Component {

    renderCard(job) {
        const initialRegion = {
            latitude: job.latitude,
            longitude: job.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return (
            <Card
                title={job.title}
            >
                <View style={{height: 300}}>
                    <MapView
                        scrollEnabled={false}
                        style={{flex: 1}}
                        //must set to true in android
                        cacheEnabled={Platform.OS === 'android'}
                        initialRegion={initialRegion}
                    >

                    </MapView>
                </View>
                <View style={styles.jobDetailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{parseTime(job.created_at)}</Text>
                </View>
                <Text>
                    {job.description}
                </Text>
            </Card>
        );
    }

    renderNoMoreCards = () => {
        return (
            <Card title="No More Jobs">
                <Button
                    title="Back To Map"
                    large
                    icon={{name: 'my-location'}}
                    backgroundColor="#03A9F4"
                    onPress={() => this.props.navigation.navigate('map')}
                />
            </Card>
        );
    };

    render() {
        return (
            <View style={{marginTop: 10}}>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeRight={job => this.props.likeJob(job)}
                />
            </View>
        )
    }
}

const styles = {
    jobDetailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
};

const mapStateToProps = ({jobs}) => {
    return {jobs: jobs.results};
};

export default connect(mapStateToProps, {likeJob})(DeckScreen);