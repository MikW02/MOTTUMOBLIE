import { Text, View, Button, Image, ImageBackground } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../Firebase";
import { styles } from "../Components/styles";


interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Navegador = ({ navigation }: RouterProps) => {
    return (
        
        
        <View style={styles.containerNav}>
            <ImageBackground source={require('../Assets/Oceano.png')} style={styles.backgroundImage}>

            <View style={styles.button}> 
                <Button onPress={() => navigation.navigate('Coleta')} title="Registrar Coleta de Lixo em praia" />
                <Button onPress={() => navigation.navigate('SobreColeta')} title="Como ganhar pontos" />  
                <Button onPress={() => navigation.navigate('Doar')} title="Doar" />
                <Button onPress={() => navigation.navigate('Detalhes')} title="Sobre nós" />
                <Button onPress={() => FIREBASE_AUTH.signOut()} title="Deslogar" />
            </View>
            <Image source={require('../Assets/LOGO.png')} style={styles.logoNav}/>
            </ImageBackground>
        </View>
    );
};

export default Navegador;