import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet } from 'react-native';
import PedidosNavigator from './PedidosNavigator';
import ProdutoUsuarioNavigator from './ProdutoUsuarioNavigator'
import PagamentoNavigator from './PagamentoNavigator';
export default function UsuarioNavigator({ navigation }) {
  const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator initialRouteName="Produtos"  screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Produtos" component={ProdutoUsuarioNavigator} />
        <Tab.Screen name="MeusPedidos" component={PedidosNavigator} />
        <Tab.Screen name="Carrinho" component={PagamentoNavigator} />


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