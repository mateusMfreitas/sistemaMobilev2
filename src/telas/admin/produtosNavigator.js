import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet } from 'react-native';
import Adashboard from './dashboard';
import Produtos from './produtos';
import Eventos from './eventos';
import Configuracoes from './configuracoes';

export default function ProdutosNavigator({ navigation }) {
  const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator initialRouteName="Adashboard">
        <Tab.Screen name="Adashboard" component={Adashboard} />
        <Tab.Screen name="Produtos" component={Produtos} />
        <Tab.Screen name="Configurações" component={Configuracoes} />
        <Tab.Screen name="Eventos" component={Eventos} />
      </Tab.Navigator>
    );   
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });