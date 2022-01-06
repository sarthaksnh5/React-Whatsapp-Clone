import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',        
    },
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row'
    },
    midContainer: {
        justifyContent: 'space-around',        
    },
    avatar: {
        width: 70,
        height: 70,
        marginRight: 15,
        borderRadius: 70,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    message: {
        fontSize: 15,
        color: 'grey',
        width: '100%',
        
    },
    createdAt: {
        fontSize: 14, 
        color: 'grey',
    },
    line: {
        backgroundColor: 'lightgrey',
        width: "90%",
        height: '1%',        
    }
})

export default styles;