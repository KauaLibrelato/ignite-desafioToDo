import React, { useState } from "react";

import { TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TextArea({ addTask }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    if (!task) return;

    addTask(task);
    setTask("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicione nova task..."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />

      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Feather name="chevron-right" color="#B2B2B2" size={18} />
      </TouchableOpacity>
    </View>
  );
}
