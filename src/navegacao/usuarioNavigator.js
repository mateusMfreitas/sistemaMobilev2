import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet } from 'react-native';
import Udashboard from '../telas/usuario/dashboard';
import Configuracoes from '../telas/usuario/configuracoes';
import ProdutoUsuarioNavigator from './ProdutoUsuarioNavigator'

export default function UsuarioNavigator({ navigation }) {
  const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator initialRouteName="Udashboard"  screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Udashboard" component={ProdutoUsuarioNavigator} />
        <Tab.Screen name="Configurações" component={Configuracoes} />
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