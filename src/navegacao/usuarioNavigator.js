import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet } from 'react-native';
import PedidosNavigator from './PedidosNavigator';
import ProdutoUsuarioNavigator from './ProdutoUsuarioNavigator'
import PagamentoNavigator from './PagamentoNavigator';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o componente Icon

export default function UsuarioNavigator({ navigation }) {
  const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator initialRouteName="Produtos"  screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Produtos" component={ProdutoUsuarioNavigator} options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="MeusPedidos" component={PedidosNavigator} options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Carrinho" component={PagamentoNavigator} options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}/>
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