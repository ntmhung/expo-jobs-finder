/**
 * Created by minhhung on 7/15/18.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from "react-redux";
import {MapView} from 'expo';
import {Card, Button} from 'react-native-elements';
import Swipe from "../components/Swipe";
import {parseTime} from "../helpers";

class DeckScreen extends Component {
    renderCard(job) {
        return (
            <Card
                title={job.title}
            >
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

    render(){
        return (
            <View>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
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