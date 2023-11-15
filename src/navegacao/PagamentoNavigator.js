import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Carrinho from '../telas/usuario/carrinho';
import Pagamento from '../telas/usuario/pagamento'
import DetalharPedido from '../telas/usuario/detalharPedido';
const Stack = createStackNavigator();

function PagamentoNavigator() {
  return (
    <Stack.Navigator initialRouteName="Carrinhos">
        <Stack.Screen name="Carrinhos" component={Carrinho} initialParams={{ atualizarTudo: true }} options={{
          headerShown: false  
        }}/>
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="Pedido" component={DetalharPedido} />
    </Stack.Navigator>
  );
}
export default PagamentoNavigator;
