import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


const styles = StyleSheet.create({
    container: {        
        flexDirection: 'row', 
        padding: 5,            
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        marginRight: 10,
        flex: 1,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
    },
    textInput:{
        flex: 1,
        fontSize: 20,
        marginHorizontal: 4,
    },
    icons:{
        marginHorizontal: 5,
    },
    buttonContainer:{
        zIndex: 5,
        backgroundColor: Colors.light.tint,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 45,
        height: 45,
        marginRight: 10,
    }
})

export default styles;