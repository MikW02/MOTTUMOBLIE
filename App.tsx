import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './Firebase';

import Navegador from './app/Screens/Navegador'
import Login from './app/Screens/Login'
import Patio from './app/Screens/Patio';
import Registro from './app/Screens/Registro';
import ComoUsar from './app/Screens/ComoUsar';
import Detalhes from './app/Screens/Detalhes';


const Stack = createNativeStackNavigator();

const LoginStack = createNativeStackNavigator();

export default function App() {
  
  const[user,setUser] = useState<User | null>(null);
  useEffect(() =>{
  onAuthStateChanged(FIREBASE_AUTH,(user) => {
    console.log('user',user);
    setUser(user);
  });
},[]);

  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        {user ? (
          <Stack.Screen name="Navegador" component={Navegador}/> 
        ) : (
          <Stack.Screen name="Login" component={Login} options = {{ headerShown: false }}/> 
        )}
                
                <Stack.Screen name="Registro" component={Registro} />
                <Stack.Screen name="ComoUsar" component={ComoUsar} />
                <Stack.Screen name="Detalhes" component={Detalhes} />
                <Stack.Screen name="Patio" component={Patio} />
                
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
