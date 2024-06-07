import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, Alert, ImageBackground } from "react-native";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../../Firebase";
import { styles } from '../Components/styles';

function Coleta() {
    const [userId, setUserId] = useState(null);
    const [coleta, setColeta] = useState({
        Borracha: 0,
        Latas: 0,
        Plastico: 0,
        Vidro: 0
    });

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setUserId(user.uid);
            fetchColeta(user.uid);
        }
    }, []);

    const fetchColeta = async (userId) => {
        try {
            const docRef = doc(FIREBASE_DB, "users", userId, "coletas", "total");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setColeta(docSnap.data());
            } else {
                
                const initialData = {
                    Borracha: 0,
                    Latas: 0,
                    Plastico: 0,
                    Vidro: 0
                };
                await setDoc(docRef, initialData, { merge: true });
                setColeta(initialData);
                console.log("Document created with initial data: ", initialData);
            }
        } catch (error) {
            console.error("Error fetching or creating document: ", error);
        }
    };

    const increment = (type) => {
        setColeta(prevState => {
            const newValue = prevState[type] + 1;
            const updatedColeta = { ...prevState, [type]: newValue };

            if (userId) {
                const docRef = doc(FIREBASE_DB, "users", userId, "coletas", "total");
                updateDoc(docRef, {
                    [type]: newValue
                }).catch((error) => console.error("Error updating document: ", error));
            }

            return updatedColeta;
        });
    };

    const decrement = (type) => {
        setColeta(prevState => {
            const newValue = Math.max(prevState[type] - 1, 0); 
            const updatedColeta = { ...prevState, [type]: newValue };

            if (userId) {
                const docRef = doc(FIREBASE_DB, "users", userId, "coletas", "total");
                updateDoc(docRef, {
                    [type]: newValue
                }).catch((error) => console.error("Error updating document: ", error));
            }

            return updatedColeta;
        });
    };

    const getTotalColeta = () => {
        return coleta.Borracha + coleta.Latas + coleta.Plastico + coleta.Vidro;
    };

    const handleLimparColetas = () => {
        Alert.alert(
            "Tem certeza?",
            "Isso irá limpar todas as doações. Esta ação não pode ser desfeita.",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { text: "Confirmar", onPress: limparDoacoes }
            ]
        );
    };

    const limparDoacoes = () => {
        const initialData = {
            Borracha: 0,
            Latas: 0,
            Plastico: 0,
            Vidro: 0
        };
        setColeta(initialData);
        updateFirestore(initialData);
    };

    const updateFirestore = async (data) => {
        try {
            const docRef = doc(FIREBASE_DB, "users", userId, "coletas", "total");
            await setDoc(docRef, data, { merge: true });
            console.log("Documento atualizado: ", data);
        } catch (error) {
            console.error("Erro atualizando o documento: ", error);
        }
    };

    return (
        <ImageBackground source={require('../Assets/Praia.jpg')} style={styles.backgroundImage}>
        <View style={styles.containerDoações}>
            
            <Text>Id do Usuario: {userId}</Text>
            <Text >Borracha: {coleta.Borracha}</Text>
            <Button title="Adicionar Borracha" onPress={() => increment('Borracha')} />
            <Button title="Remover Borracha" onPress={() => decrement('Borracha')} />
            <Text >Latas: {coleta.Latas}</Text>
            <Button title="Adicionar Latas" onPress={() => increment('Latas')} />
            <Button title="Remover Latas" onPress={() => decrement('Latas')} />
            <Text>Plastico: {coleta.Plastico}</Text>
            <Button title="Adicionar Plastico" onPress={() => increment('Plastico')} />
            <Button title="Remover Plastico" onPress={() => decrement('Plastico')} />
            <Text>Vidro: {coleta.Vidro}</Text>
            <Button title="Adicionar Vidro" onPress={() => increment('Vidro')} />
            <Button title="Remover Vidro" onPress={() => decrement('Vidro')} />
            <Text>Total: {getTotalColeta()}</Text>
            <Button title="Limpar Todas as Coletas" onPress={handleLimparColetas} />
            
        </View>
        </ImageBackground>
    );
}


export default Coleta;