import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const InputBox = () => {
  const [message, setMessage] = useState("");
  const [written, setWritten] = useState(false);

  const micorsent = () => {
    if (written) {
      console.warn(`Send Message ${message}`);
    } else {
      console.warn("Microphone");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color={"grey"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            setMessage(text);
            if (text.length > 0) {
              setWritten(true);
            } else {
              setWritten(false);
            }
          }}
          value={message}
          multiline={true}
          numberOfLines={6}
          placeholder="Type your message"
        />
        {!written && (
          <Entypo
            name="attachment"
            style={styles.icons}
            size={18}
            color={"grey"}
          />
        )}
        <Fontisto name="camera" style={styles.icons} size={18} color={"grey"} />
      </View>
      <TouchableOpacity

        onPress={micorsent} style={styles.buttonContainer}>
        <MaterialCommunityIcons
          name={written ? "send" : "microphone"}
          color={"white"}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
