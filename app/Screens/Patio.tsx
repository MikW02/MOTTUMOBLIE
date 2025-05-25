import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../Components/styles';

const STORAGE_KEY = 'motos_status';

const Patio = () => {
  const [motos, setMotos] = useState([
    { id: '1', modelo: 'Honda CG 160', status: 'Disponível' },
    { id: '2', modelo: 'Yamaha Factor', status: 'Disponível' },
    { id: '3', modelo: 'Honda Biz 110i', status: 'Em manutenção' },
    { id: '4', modelo: 'Yamaha NEO 125', status: 'Disponível' },
  ]);

  useEffect(() => {
    const carregarStatus = async () => {
      try {
        const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);
        if (dadosSalvos) {
          setMotos(JSON.parse(dadosSalvos));
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    carregarStatus();
  }, []);

  const salvarStatus = async (novasMotos: any) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novasMotos));
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const retirarMoto = (id: string) => {
    const novasMotos = motos.map((moto) =>
      moto.id === id && moto.status === 'Disponível'
        ? { ...moto, status: 'Em uso' }
        : moto
    );
    setMotos(novasMotos);
    salvarStatus(novasMotos);
    Alert.alert('Moto retirada com sucesso!');
  };

  const devolverMoto = (id: string) => {
    const novasMotos = motos.map((moto) =>
      moto.id === id && moto.status === 'Em uso'
        ? { ...moto, status: 'Disponível' }
        : moto
    );
    setMotos(novasMotos);
    salvarStatus(novasMotos);
    Alert.alert('Moto devolvida com sucesso!');
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.modelo}</Text>
      <Text style={styles.itemStatus}>Status: {item.status}</Text>

      {item.status === 'Disponível' && (
        <TouchableOpacity
          onPress={() => retirarMoto(item.id)}
          style={styles.buttonRetirar}
        >
          <Text style={styles.buttonText}>Retirar Moto</Text>
        </TouchableOpacity>
      )}

      {item.status === 'Em uso' && (
        <TouchableOpacity
          onPress={() => devolverMoto(item.id)}
          style={styles.buttonDevolver}
        >
          <Text style={styles.buttonText}>Devolver Moto</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.containerPatio}>
      <Text style={styles.titlePatio}>Pátio de Motos</Text>
      <FlatList
        data={motos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Patio;
