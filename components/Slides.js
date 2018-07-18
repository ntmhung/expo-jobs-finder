/**
 * Created by minhhung on 7/18/18.
 */
import React, {Component} from "react";
import {ScrollView, View, Text} from "react-native";

class Slides extends Component {

    renderSlide() {
        return this.props.data.map((slide) => {
            return (
                <View key={slide.text} style={styles.slide}>
                    <Text style={styles.slideText}>{slide.text}</Text>
                </View>
            );

        });
    }

    render() {
        return (
            <ScrollView
                horizontal
                style={{flex: 1}}
            >
                {this.renderSlide()}
            </ScrollView>
        )
    }
}

const styles = {
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideText: {
        fontSize: 30
    }
};

export default Slides;
