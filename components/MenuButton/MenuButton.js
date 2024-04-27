import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MenuButton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        margin: 25,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: "#e86818" }]}
      >
        <AntDesign name="videocamera" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: "#1f4de4" }]}
      >
        <Entypo name="squared-plus" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: "#1f4de4" }]}
      >
        <FontAwesome name="calendar" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: "#1f4de4" }]}
      >
        <Ionicons name="share" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
