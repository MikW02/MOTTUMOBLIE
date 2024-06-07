import React from 'react';
import { View, Text, ScrollView,  Image } from 'react-native';
import { styles } from '../Components/styles';

const SobreColeta = () => {
    return (
        <ScrollView style={styles.containerText}>

        <Image source={require('../Assets/Lixo.jpg')} style={styles.logoGrande}/>
            <Text style={styles.title}>Como Ganhar Pontos no Azul Infinito: Ocean Cleanup</Text>
            
            <Text style={styles.paragraph}>
                No Azul Infinito, sua dedicação à limpeza dos oceanos e praias é reconhecida e recompensada! Aqui está como você pode ganhar pontos e contribuir ainda mais para a preservação do nosso planeta:
            </Text>
            
            <Text style={styles.subtitle}>Registre Suas Coletas:</Text>
            <Text style={styles.paragraph}>
                Cada vez que você participar de uma coleta de lixo em praias ou oceanos, registre sua ação no nosso aplicativo. É simples e rápido!
            </Text>
            
            <Text style={styles.subtitle}>Ganhe Pontos Automaticamente:</Text>
            <Text style={styles.paragraph}>
                Assim que você fizer o registro, pontos serão automaticamente adicionados à sua conta. Esses pontos refletem seu esforço e comprometimento com a causa.
            </Text>
            
            <Text style={styles.subtitle}>Documente Suas Ações:</Text>
            <Text style={styles.paragraph}>
                Para garantir que suas coletas sejam válidas e você possa receber suas recompensas, é essencial manter um registro fotográfico de tudo o que você coletou. Tire fotos antes e depois da coleta e faça o upload no aplicativo.
            </Text>
            
            <Text style={styles.subtitle}>Recompensas:</Text>
            <Text style={styles.paragraph}>
                Acumule pontos e troque por recompensas exclusivas. Ao final de cada período, os participantes com maior pontuação serão reconhecidos e recompensados, incentivando todos a continuar engajados na missão de limpeza dos nossos oceanos.
            </Text>
            
            <Text style={styles.paragraph}>
                Faça parte do Azul Infinito e veja seu impacto positivo no meio ambiente ser valorizado!
            </Text>
        </ScrollView>
    );
};

export default SobreColeta;