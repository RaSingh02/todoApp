import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Circle from './Circle';

// Props: text: string, completed: boolean
const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>
                    {props.text}
                </Text>
            </View>
            <View>
                {<Circle completed={props.completed} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F2F4F8',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#D9E3F0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#4D72DE',
        opacity: 0.2,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: '#333',
        fontSize: 16,
        fontWeight: '500',
        textShadowColor: '#ccc',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});


export default Task;