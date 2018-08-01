/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from "react";
import {View, Text, Platform} from "react-native";
import {connect} from "react-redux";
import {MapView} from "expo";
import {Card} from "react-native-elements";
import Swipe from "../components/Swipe";
import {parseTime} from "../helpers";

class DeckScreen extends Component {
    renderCard(job) {
        const initialRegion = {
            latitude: '',
            longitude: '',
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

    renderNoMoreCards() {
        return (
            <Card title="No more jobs">

            </Card>
        );
    }

    render() {
        return (
            <View>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
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

export default connect(mapStateToProps, {})(DeckScreen);