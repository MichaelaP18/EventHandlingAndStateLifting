import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const ToDoList = ({ tasks }) => {
    return (
        <View>
            {tasks.map((task, index) => (
                <View key={index} style={[styles.task, styles.completed]}>
                <Text>{task}</Text>
                </View>
                ))}
            </View>
        );

    }

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },

});


export default ToDoList;