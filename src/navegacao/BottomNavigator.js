import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet } from 'react-native';
import Adashboard from '../telas/admin/dashboard';
import Produtos from '../telas/admin/produtos';
import Eventos from '../telas/admin/eventos';
import Configuracoes from '../telas/admin/configuracoes';
import ProdutosNavigator from './ProdutosNavigator';
import { Ionicons } from '@expo/vector-icons';
import Pedidos from '../telas/admin/pedidos';
import DetalharPedido from '../telas/admin/detalharPedido';
import PedidosAdminNavigator from './PedidosAdminNavigator';


export default function BottomNavigator({ navigation }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Produtos') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Pedidos') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Início" component={Adashboard} />
      <Tab.Screen name="Produtos" component={ProdutosNavigator} />
      <Tab.Screen name="Pedidos" component={PedidosAdminNavigator} />

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