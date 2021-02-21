import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Todo from "./Todo";

const TodoLIst = () => {
  const [title, setTitle] = useState("Todo List");
  const [text, setText] = useState();
  const [list, setList] = useState(["hello world!!"]);

  const AddItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText(" ");
  };
  return (
    <View style={{ width: "80%", marginBottom: 60 }}>
      <Text style={[styles.align, styles.font]}>{title}</Text>
      <ScrollView>
        {list.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title="Add Item" onPress={AddItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    marginTop: 8,
    padding: 5,
  },
});

export default TodoLIst;
