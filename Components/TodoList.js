import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput } from 'react-native'
import Todo from './Todo';

const TodoLIst = () => {
    const [title, setTitle] = useState("Todo List")

    return (
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <ScrollView>
                <Todo name={'First Todo'} />
                <Todo name={'Second Todo'} />
                <Todo name={'Three Todo'} />
                <Todo name={'Four Todo'} />
                <Todo name={'Five Todo'} />
                <Todo name={'Sex Todo'} />
            </ScrollView>
            <View>
                <TextInput style={styles.input} />
                <Button title="Add Item" onPress={() => setTitle("My List")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf: "center",
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 8,
        marginTop: 8,
        padding: 5
    }
})

export default TodoLIst;