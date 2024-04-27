import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ContactMenu = () => {
  return (
    <View style={{ marginLeft: 10, marginTop: 10 }}>
      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={[
              styles.buttonContainer,
              { backgroundColor: "#494c54", marginRight: 20 },
            ]}
          >
            <AntDesign name="star" size={24} color="white" />
          </View>
          <Text style={{ color: "white", fontSize: 20 }}>Starred</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContactMenu;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
