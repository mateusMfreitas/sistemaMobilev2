import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MeusPedidos from '../telas/usuario/meusPedidos';
import EditarProduto from '../telas/admin/editarProduto';
import DetalharPedido from '../telas/admin/detalharPedido';
import Pedidos from '../telas/admin/pedidos';

const Stack = createStackNavigator();

function PedidosAdminNavigator() {
  return (
    <Stack.Navigator initialRouteName="MeusPedidos">
        <Stack.Screen name="Pedidos" component={Pedidos} initialParams={{ atualizarTudo: true }}  options={{ headerShown: false }}/>
        <Stack.Screen name="DetalharPedido" component={DetalharPedido} options={{ title: "Voltar" }} />
    </Stack.Navigator>
  );
}

export default PedidosAdminNavigator;
