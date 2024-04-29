import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const contacts = [
  {
    type: "Starred",
  },
  {
    type: "Contact",
    name: "David Warner",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlO2ApvM_na4XIQLyeufiHftXeAWaTAb9ncA&usqp=CAU",
  },
  {
    type: "Contact",
    name: "Virat Kohli",
    photo:
      "https://c.ndtvimg.com/2024-04/hpv248ho_virat-kohli-bcci_625x300_16_April_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
  },
  {
    type: "Contact",
    name: "MS Dhoni",
    photo:
      "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2024/04/dhoni-8-1714329563.jpg",
  },
];

const ContactMenu = () => {
  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
        <TouchableOpacity key={index.toString()} style={styles.contactItem}>
          {contact.type === "Starred" ? (
            <View style={[styles.buttonContainer, styles.starredIcon]}>
              <AntDesign name="star" size={24} color="white" />
            </View>
          ) : (
            <Image
              source={{ uri: contact.photo }}
              style={styles.contactPhoto}
            />
          )}
          <Text style={styles.contactName}>{contact.name || "Starred"}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginRight: 20,
  },
  starredIcon: {
    backgroundColor: "#494c54",
  },
  contactPhoto: {
    width: 40,
    height: 40,
    borderRadius: 12,
    resizeMode: "stretch",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 20,
  },
  contactName: {
    color: "white",
    fontSize: 20,
  },
});

export default ContactMenu;
