import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MeusPedidos from '../telas/usuario/meusPedidos';
import EditarProduto from '../telas/admin/editarProduto';
import DetalharPedido from '../telas/usuario/detalharPedido';

const Stack = createStackNavigator();

function PedidosNavigator() {
  return (
    <Stack.Navigator initialRouteName="MeusPedidos">
        <Stack.Screen name="MeusPedidos" component={MeusPedidos} initialParams={{ atualizarTudo: true }}  options={{ headerShown: false }}/>
        <Stack.Screen name="DetalharPedido" component={DetalharPedido} />
    </Stack.Navigator>
  );
}

export default PedidosNavigator;
