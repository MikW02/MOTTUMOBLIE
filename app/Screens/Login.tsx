import { View, Text, TextInput, StyleSheet, ActivityIndicator, Button , Image} from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from "../../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from '../Components/styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;




    
    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const userId = response.user.uid; 
            console.log(response);
            console.log("User ID:", userId); 
            alert('Login realizado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Falha no login. Verifique suas credenciais.'+ error);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const userId = response.user.uid; 
            console.log(response);
            console.log("User ID:", userId); 
            alert('Registro realizado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Falha no registro. Tente novamente.' + error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.containerText}>
            <Image source={require('../Assets/LOGOMOTTU.png')} style={styles.logoGrande}/>
            <Text>Login</Text>
            <TextInput
                value={email}
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                autoCapitalize="none"
            />
            <TextInput
                value={password}
                secureTextEntry={true}
                style={styles.input}
                placeholder='Senha'
                autoCapitalize='none'
                onChangeText={(text) => setPassword(text)}
            />

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <View style={styles.button}>
                        <Button title="Login" onPress={signIn} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Registrar-Se" onPress={signUp} />
                    </View>
                </>
            )}
        </View>
    );
};

export default Login;


