import React, { useEffect, useRef, useState } from "react";
import { Image, TouchableOpacity, View, Text, TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";
import trashIcon from "../../assets/trash.png";
import editIcon from "../../assets/Edit.png";

import { styles } from "./styles";
import { Task } from "../TaksList";
import { EditTasksProps } from "../../screens/Home";

interface TasksItemProps {
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({ taskId, taskNewTitle }: EditTasksProps) => void;
}

export function TaskItem({
  task,
  toggleTaskDone,
  removeTask,
  editTask,
}: TasksItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskNewTitleValue, setTaskNewTitleValue] = useState(task.title);
  const textInputRef = useRef<TextInput>(null);

  function handleStartEditing() {
    setIsEditing(true);
  }

  function handleCancelEditing() {
    setTaskNewTitleValue(task.title);
    setIsEditing(false);
  }

  function handleSubmitEditing() {
    editTask({ taskId: task.id, taskNewTitle: taskNewTitleValue });
    setIsEditing(false);
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (isEditing) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [isEditing]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.infoContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(task.id)}
        >
          <View style={task.done ? styles.taskMarkerDone : styles.taskMarker}>
            {task.done && <Feather name="check" size={12} color="#fff" />}
          </View>

          <TextInput
            value={taskNewTitleValue}
            onChangeText={setTaskNewTitleValue}
            editable={isEditing}
            onSubmitEditing={handleSubmitEditing}
            style={task.done ? styles.taskTextDone : styles.taskText}
            ref={textInputRef}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        {isEditing ? (
          <TouchableOpacity onPress={handleCancelEditing}>
            <Feather name="x" size={24} color="#b2b2b2" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleStartEditing}>
            <Feather name="edit" size={20} color="#B2B2B2" />
          </TouchableOpacity>
        )}
        <View style={styles.iconsDivider} />

        <TouchableOpacity
          disabled={isEditing}
          onPress={() => removeTask(task.id)}
        >
          <Image source={trashIcon} style={{ opacity: isEditing ? 0.2 : 1 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
