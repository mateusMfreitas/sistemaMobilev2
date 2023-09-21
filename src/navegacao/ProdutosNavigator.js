import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Produtos from '../telas/admin/produtos';
import EditarProduto from '../telas/admin/editarProduto';



const Stack = createStackNavigator();

function ProdutosNavigator() {
  return (
    <Stack.Navigator initialRouteName="Produtos">
      <Stack.Screen name="ListaProdutos" component={Produtos} />
      <Stack.Screen name="EditarProduto" component={EditarProduto} />
    </Stack.Navigator>
  );
}

export default ProdutosNavigator;
