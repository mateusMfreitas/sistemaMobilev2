import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from '../telas/cadastro/cadastro';
import ProdutosNavigator from '../telas/admin/produtosNavigator';
import Vendas from '../telas/admin/vendas';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Cadastro">
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Vendas" component={Vendas} />
      <Stack.Screen name="ProdutosNavigator" component={ProdutosNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
