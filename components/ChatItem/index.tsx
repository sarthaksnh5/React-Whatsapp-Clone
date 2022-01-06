import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListIemProps = {
  chatRoom: ChatRoom;
};

const ChatListIem = (props: ChatListIemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("ChatRoom", { 
      name: user.name, 
      id: chatRoom.id ,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
            <View style={styles.midContainer}>
              <Text style={styles.username}>{user.name}</Text>
              <Text ellipsizeMode="tail" style={styles.message}>
                {chatRoom.lastMessage.content}
              </Text>
            </View>
          </View>
          <Text style={styles.createdAt}>
            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
        <View style={styles.line}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListIem;
