import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../Components/styles';

const USER_DATA_KEY = 'dados_usuario';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await AsyncStorage.getItem(USER_DATA_KEY);
        if (dados) {
          const usuario = JSON.parse(dados);
          setNome(usuario.nome);
          setCpf(usuario.cpf);
          setEmail(usuario.email);
          setCnh(usuario.cnh);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      }
    };

    carregarDados();
  }, []);

  const validarNome = (nome: string) => {
    return /^[A-Za-zÀ-ú\s]+$/.test(nome.trim());
  };

  const validarCPF = (cpf: string) => {
    return /^\d{11}$/.test(cpf);
  };

  const validarEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const salvarDados = async () => {
    if (!nome || !cpf || !email || !cnh) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (!validarNome(nome)) {
      Alert.alert('Erro', 'Nome inválido. Use apenas letras e espaços.');
      return;
    }

    if (!validarCPF(cpf)) {
      Alert.alert('Erro', 'CPF inválido. Deve conter exatamente 11 números.');
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert('Erro', 'Email inválido. Insira um email válido.');
      return;
    }

    const dadosUsuario = { nome, cpf, email, cnh };

    try {
      await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(dadosUsuario));
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  const deletarDados = async () => {
    try {
      await AsyncStorage.removeItem(USER_DATA_KEY);
      setNome('');
      setCpf('');
      setEmail('');
      setCnh('');
      Alert.alert('Sucesso', 'Dados apagados com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar dados:', error);
      Alert.alert('Erro', 'Não foi possível apagar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro do Usuário</Text>

      <Text>Nome completo:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        autoCapitalize="words"
      />

      <Text>CPF (apenas números):</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={(text) => setCpf(text.replace(/[^0-9]/g, ''))}
        placeholder="Digite seu CPF"
        keyboardType="numeric"
        maxLength={11}
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>CNH:</Text>
      <TextInput
        style={styles.input}
        value={cnh}
        onChangeText={(text) => setCnh(text.replace(/[^0-9]/g, ''))}
        placeholder="Digite sua CNH"
        keyboardType="numeric"
      />

      <View style={{ marginVertical: 10 }}>
        <Button title="Salvar Dados" onPress={salvarDados} />
      </View>

      <View>
        <Button title="Apagar Cadastro" color="red" onPress={deletarDados} />
      </View>
    </View>
  );
};

export default CadastroUsuario;
