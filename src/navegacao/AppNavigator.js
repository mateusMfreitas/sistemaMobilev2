import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from '../telas/cadastro/cadastro';
import ProdutosNavigator from '../telas/admin/produtosNavigator';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Cadastro">
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="ProdutosNavigator" component={ProdutosNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
