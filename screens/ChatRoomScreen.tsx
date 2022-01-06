import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, FlatList, ImageBackground } from 'react-native'
import ChatMessage from '../components/ChatMessage'
import chatRoomData from '../data/Chats'
import night from '../assets/images/night.jpg';
import InputBox from '../components/inputBox'

const ChatRoomScreen = () => {
    const { params } = useRoute();
    console.log(params);

    return (
        <ImageBackground 
        style={{width:'100%', height: '100%',}}
            source={night}
        >
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item} />
                }
                inverted
            />

            <InputBox />
        </ImageBackground>
    )
}

export default ChatRoomScreen


