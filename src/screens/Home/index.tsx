import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { Header } from "../../components/Header";
import { Task, TasksList } from "../../components/TaksList";
import { TextArea } from "../../components/TextArea";
import { styles } from "./styles";

export interface EditTasksProps {
  taskId: number;
  taskNewTitle: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      done: false,
      title: newTaskTitle,
    };
    const taskWithSameTitle = tasks.find((task) => task.title === newTaskTitle);

    if (taskWithSameTitle) {
      return Alert.alert(
        "Task já cadastrada",
        "Você não pode cadastrar uma task com o mesmo nome"
      );
    }

    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const foundItem = updatedTasks.find((item) => item.id == id);

    if (!foundItem) return;

    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    Alert.alert(
      "Remover item",
      "Tem certeza que você deseja remover esse item?",
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
          },
        },
        { text: "Não", onPress: () => {} },
      ]
    );
  }

  function handleEditTask({ taskId, taskNewTitle }: EditTasksProps) {
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const taskToBeUpdate = updatedTasks.find((item) => item.id == taskId);

    if (!taskToBeUpdate) return;

    taskToBeUpdate.title = taskNewTitle;
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TextArea addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        editTask={handleEditTask}
      />
    </View>
  );
}
