import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

const Todo = (props) => {
    return (
        <View style={styles.item}>
            <Text>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'whitesmoke'
    }
})

export default Todo;