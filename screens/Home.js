import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import MenuButton from "../components/MenuButton/MenuButton";
import ContactMenu from "../components/ContactMenu/ContactMenu";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <MenuButton />
      <ContactMenu />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    height: "100%",
    marginTop: 20,
  },
});
