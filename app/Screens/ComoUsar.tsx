import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../Components/styles';

const ComoUsar = () => {
    return (
        <ScrollView style={styles.containerText}>

            

            <Text style={styles.title}>Como Usar o Aplicativo de Gestão do Pátio de Motos</Text>

            <Text style={styles.paragrafo}>
                Este aplicativo foi desenvolvido para facilitar o controle e a gestão das motos em um pátio, permitindo que você retire e devolva motos de forma simples e prática.
            </Text>

            <Text style={styles.subtitle}>Login:</Text>
            <Text style={styles.paragrafo}>
                 Nosso aplicativo utiliza o Firebase para autenticação de usuários, exigindo login sempre que o app é aberto, 
                 pois atualmente o estado de autenticação não fica salvo localmente. Após o login, o Firebase não é mais utilizado diretamente no app, 
                 futuramente ele será ultilizado ao invés do async storage.
                 
            </Text>


            <Text style={styles.subtitle}>Cadastro do Usuário:</Text>
            <Text style={styles.paragrafo}>
                Para começar, preencha seu cadastro com informações importantes, como nome, CPF e CNH. Seus dados serão salvos para futuras utilizações.
            </Text>

            <Text style={styles.subtitle}>Visualização do Pátio:</Text>
            <Text style={styles.paragrafo}>
                Na tela do pátio, você poderá ver todas as motos disponíveis, em uso ou em manutenção, com seus respectivos status atualizados em tempo real.
            </Text>

            <Text style={styles.subtitle}>Retirar uma Moto:</Text>
            <Text style={styles.paragrafo}>
                Para retirar uma moto, basta clicar no botão "Retirar Moto" disponível para as motos que estiverem com status "Disponível". O status da moto será alterado para "Em uso".
            </Text>

            <Text style={styles.subtitle}>Devolver uma Moto:</Text>
            <Text style={styles.paragrafo}>
                Quando devolver a moto, selecione a moto em uso e clique em "Devolver Moto". Assim, ela volta a ficar disponível para outros usuários.
            </Text>

            <Text style={styles.subtitle}>Persistência dos Dados:</Text>
            <Text style={styles.paragrafo}>
                Todos os dados de status das motos e seu cadastro são armazenados localmente no dispositivo, garantindo que as informações sejam mantidas mesmo após fechar e abrir o aplicativo.
            </Text>

            <Text style={styles.paragrafo}>
                Aproveite o aplicativo para uma gestão inteligente e eficiente do pátio de motos!
            </Text>

            <Image source={require('../Assets/LOGOMOTTU.png')} style={styles.logoGrande} />
        </ScrollView>
    );
};

export default ComoUsar;
