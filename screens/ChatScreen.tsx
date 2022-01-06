import { FlatList, StyleSheet } from "react-native";
import ChatListIem from "../components/ChatItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import ChatRooms from "../data/ChatRooms";
import { RootTabScreenProps } from "../types";

export default function ChatScreen({
  navigation,
}: RootTabScreenProps<"Chats">) {
  return (
    <View style={styles.container}>
      <FlatList
      style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListIem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
