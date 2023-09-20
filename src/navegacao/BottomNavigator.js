import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet } from 'react-native';
import Adashboard from '../telas/admin/dashboard';
import Produtos from '../telas/admin/produtos';
import Eventos from '../telas/admin/eventos';
import Configuracoes from '../telas/admin/configuracoes';

export default function BottomNavigator({ navigation }) {
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