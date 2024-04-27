import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        borderColor: "gray",
        borderWidth: 1,
        alignItems: "center",
        borderRadius: 12,
        padding: 5,
      }}
    >
      <TouchableOpacity>
        <AntDesign name="search1" size={24} color="gray" />
      </TouchableOpacity>
      <View style={{ marginLeft: 20 }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="gray"
          onChangeText={() => {
            console.log("text");
          }}
          color="white"
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
