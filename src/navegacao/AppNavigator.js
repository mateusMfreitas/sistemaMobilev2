
import UsuarioNavigator from './usuarioNavigator';
import Vendas from '../telas/admin/vendas';
import BottomNavigator from './BottomNavigator';
import Login from '../telas/cadastro/login';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cadastro from '../telas/cadastro/cadastro';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
     <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Vendas" component={Vendas} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator}  options={{
    headerTitle: 'Logout', 
    headerBackTitle: null
  }} />
      <Stack.Screen name="UsuarioNavigator" component={UsuarioNavigator}  options={{
    headerTitle: 'Logout',
    headerBackTitle: null
  }} />

    </Stack.Navigator> 
  );
}

export default AppNavigator;
