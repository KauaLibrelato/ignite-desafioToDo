import React from "react";

import { View, Image, Text } from "react-native";
import Logo1x from "../../assets/logo.png";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo1x} style={styles.image} />
        <Text style={styles.text}>Você tem</Text>
        <Text style={styles.boldText}>0 tarefas</Text>
      </View>
    </View>
  );
}
