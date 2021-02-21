import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Todo = (props) => {
  return (
    <View key={props.key} style={[styles.item, { padding: 8 }]}>
      <Text>{props.todo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "whitesmoke",
    marginBottom: 2,
  },
});

export default Todo;
