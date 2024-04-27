import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Entypo name="notification" size={24} color="white" />
      </TouchableOpacity>
      <Text style={{ color: "white", fontSize: 24 }}>Meet and Chat</Text>
      <TouchableOpacity>
        <Entypo name="new-message" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
