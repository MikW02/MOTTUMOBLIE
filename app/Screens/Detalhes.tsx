import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../Components/styles';

const Detalhes = () => {
    return (
        <ScrollView style={styles.containerText}>
            <Image source={require('../Assets/LOGOMOTTU.png')} style={styles.logoGrande}/>
            <Text style={styles.title}>Sobre Nós – Mottu</Text>
            
            <Text style={styles.paragrafo}>
                A Mottu é uma startup que nasceu com o propósito de transformar a mobilidade urbana e gerar oportunidade de renda para milhares de pessoas.
                Nosso principal objetivo é democratizar o acesso ao trabalho com entregas por meio da locação de motos, oferecendo uma alternativa prática e acessível para quem deseja trabalhar como entregador.
            </Text>
            
            <Text style={styles.paragrafo}>
                Funcionalidades do nosso aplicativo:
            </Text>
            
            <Text style={styles.paragrafo}>
                <Text style={{ fontWeight: 'bold' }}>Aluguel de Motos para Entregadores: </Text>
                Por meio da nossa plataforma, você pode alugar uma moto de forma simples e rápida. Não precisa ter moto própria — com a Mottu, você começa a trabalhar como entregador com baixo custo inicial.
            </Text>
            
            <Text style={styles.paragrafo}>
                <Text style={{ fontWeight: 'bold' }}>Gestão Inteligente do Pátio:</Text>
                Nosso sistema permite o mapeamento e controle em tempo real das motos disponíveis no pátio, otimizando a logística e facilitando o processo de retirada e devolução.
            </Text>
            
            <Text style={styles.paragrafo}>
                <Text style={{ fontWeight: 'bold' }}>Manutenção e Suporte: </Text>
                Garantimos que nossas motos estejam sempre em boas condições, oferecendo suporte técnico e manutenção regular. Você roda com segurança e tranquilidade.
            </Text>
            
            <Text style={styles.paragrafo}>
                Com a Mottu, milhares de pessoas conseguiram mudar de vida, encontrando uma forma de renda rápida, prática e sustentável. Estamos presentes em várias cidades e continuamos crescendo, sempre focados em facilitar o acesso ao trabalho.
            </Text>
            
            <Text style={styles.paragrafo}>
                Mottu – Liberdade para trabalhar, mobilidade para vencer!
            </Text>
        </ScrollView>
    );
};

export default Detalhes;
