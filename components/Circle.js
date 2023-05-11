import React from "react";
import { View, StyleSheet } from "react-native";

const Circle = ({completed}) => {
    return (
        <View style={completed ? styles.filledCircular : styles.circular}></View>
    )
}

const styles = StyleSheet.create({
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    filledCircular: {
        width: 12,
        height: 12,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
    },
});

export default Circle;