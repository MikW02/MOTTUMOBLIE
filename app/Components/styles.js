import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'  
    },
    containerDoações: {
        flex: 1,
        padding: 20
    },
    containerNav: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ADD8E6'
    },
    
    paragraph: {
        fontSize: 16,
        marginBottom: 25,
        lineHeight: 24
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20
    },

    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
        width: '100%'
    },
    button: {
        marginVertical: 5,
        backgroundColor: '#fff',
        width: '100%'
        
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 20,
        fontSize: 16

    },
    

//imagens:  |
//          V

    logoGrande: {
        width: '100%',
        height: 370,
        marginBottom: 20 
    },
    logoNav: {
        width: 80,
        height: 80,
        position: 'absolute',
        top: 700,  
        right: 10  
    },
    imagemMedia:{
        width: 370,
        height: 260

    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

});