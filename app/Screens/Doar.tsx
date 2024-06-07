import React from 'react';
import { View, Text, ScrollView, Linking, Image } from 'react-native';
import { styles } from '../Components/styles'; 

const Doar = () => {
    return (
        <ScrollView style={styles.containerText}>
            <Image source={require('../Assets/PraiaComLixo.jpg')} style={styles.imagemMedia}/>
            <Text style={styles.title}>Empresas Sem Fins Lucrativos para Doação</Text>

            <View style={styles.container}>
                <Text style={styles.title}>Ocean Conservancy</Text>
                <Text style={styles.paragraph}>
                    A Ocean Conservancy trabalha para proteger oceanos degradados e para garantir um futuro saudável e sustentável para o nosso planeta.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://oceanconservancy.org/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Surfrider Foundation</Text>
                <Text style={styles.paragraph}>
                    A Surfrider Foundation é dedicada à proteção e preservação dos oceanos, praias e ondas do mundo.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://www.surfrider.org/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>4Ocean</Text>
                <Text style={styles.paragraph}>
                    A 4Ocean é uma empresa que retira lixo dos oceanos e costas e transforma-o em joias. Cada pulseira vendida financia a remoção de uma libra de lixo do oceano.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://4ocean.com/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Clean Ocean Action</Text>
                <Text style={styles.paragraph}>
                    A Clean Ocean Action é dedicada a melhorar a qualidade das águas marinhas ao longo da costa do Atlântico Norte.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://www.cleanoceanaction.org/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Sea Shepherd Conservation Society</Text>
                <Text style={styles.paragraph}>
                    A Sea Shepherd Conservation Society é uma organização internacional dedicada à conservação marinha.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://seashepherd.org/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>The Ocean Cleanup</Text>
                <Text style={styles.paragraph}>
                    A The Ocean Cleanup é uma organização sem fins lucrativos que desenvolve tecnologias avançadas para eliminar a poluição plástica dos oceanos.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://theoceancleanup.com/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Project AWARE</Text>
                <Text style={styles.paragraph}>
                    O Project AWARE é uma organização global sem fins lucrativos que trabalha com mergulhadores em todo o mundo para proteger oceanos.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://www.projectaware.org/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Surfers Against Sewage</Text>
                <Text style={styles.paragraph}>
                    A Surfers Against Sewage é uma organização de caridade que trabalha para proteger as praias do Reino Unido e a vida selvagem marinha.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://www.sas.org.uk/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Oceanic Society</Text>
                <Text style={styles.paragraph}>
                    A Oceanic Society é uma organização de conservação marinha global que trabalha para proteger a vida marinha e os habitats oceânicos.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://www.oceanicsociety.org/')}>Saiba mais</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Marine Conservation Institute</Text>
                <Text style={styles.paragraph}>
                    A Marine Conservation Institute é uma organização sem fins lucrativos dedicada à proteção dos ecossistemas marinhos e à promoção de uma pesca sustentável.
                </Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://marine-conservation.org/')}>Saiba mais</Text>
            </View>
            <Image source={require('../Assets/LOGO.png')} style={styles.logoGrande}/>
        </ScrollView>
    );
};

export default Doar;
