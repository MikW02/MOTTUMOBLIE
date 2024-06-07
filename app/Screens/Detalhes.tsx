import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../Components/styles';

const Detalhes = () => {
    return (
        <ScrollView style={styles.containerText}>
            <Image source={require('../Assets/LOGO.png')} style={styles.logoGrande}/>
            <Text style={styles.title}>Azul Infinito: Ocean Cleanup</Text>
            
            <Text style={styles.paragraph}>
                O Azul Infinito é um projeto sem fins lucrativos dedicado a combater a poluição marinha e fornecer soluções eficazes para a redução dos resíduos nos nossos oceanos.
                 Nossa missão é unir forças com indivíduos e instituições comprometidas com a preservação do meio ambiente, promovendo um futuro mais limpo e sustentável para todos.
            </Text>
            
            <Text style={styles.paragraph}>
                Funcionalidades do nosso aplicativo:
            </Text>
            
            <Text style={styles.paragraph}>
                <Text style={{ fontWeight: 'bold' }}>Doações para Instituições Parceiras:</Text>
                Através do nosso aplicativo, você pode acessar uma lista diversificada de instituições que trabalham incansavelmente na limpeza dos oceanos.
                 Faça doações diretamente e ajude a financiar operações de coleta de lixo, pesquisas ambientais e campanhas de conscientização.
            </Text>
            
            <Text style={styles.paragraph}>
                <Text style={{ fontWeight: 'bold' }}>Registro de Contribuições de Coleta:</Text>
                Participe ativamente da limpeza de praias e oceanos registrando suas próprias coletas de lixo. Cada contribuição conta!
                 Registre suas ações no aplicativo e ganhe pontos por cada esforço realizado.
            </Text>
            
            <Text style={styles.paragraph}>
                <Text style={{ fontWeight: 'bold' }}>Recompensas por Contribuições:</Text>
                Valorizar quem se dedica à causa é fundamental para nós. Ao final de cada período,
                 os participantes que mais contribuírem serão recompensados por seus esforços. Pontos acumulados podem ser trocados por recompensas exclusivas,
                  incentivando e reconhecendo a importância do engajamento individual na proteção dos oceanos.
            </Text>
            
            <Text style={styles.paragraph}>
                Junte-se a nós no Azul Infinito e faça a diferença. Cada ato de generosidade e cada pedaço de lixo recolhido trazem-nos um passo mais perto de oceanos limpos
                 e saudáveis. Sua participação é crucial para que possamos visualizar e concretizar um mundo onde a poluição marinha é uma questão do passado.
            </Text>
            
            <Text style={styles.paragraph}>
                Azul Infinito: Juntos, podemos transformar o oceano!
            </Text>
            
        </ScrollView>
    );
};

export default Detalhes;