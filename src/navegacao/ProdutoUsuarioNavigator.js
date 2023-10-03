import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetalharProduto from '../telas/usuario/detalharProduto';
import Udashboard from '../telas/usuario/dashboard';

const Stack = createStackNavigator();

function ProdutoUsuarioNavigator() {
  return (
    <Stack.Navigator initialRouteName="Udashboard">
      <Stack.Screen name="Udashboard" component={Udashboard}  options={{
          headerShown: false  
        }} />
      <Stack.Screen name="DetalharProduto" component={DetalharProduto}  options={{
    headerTitle: 'Voltar aos produtos',
    headerBackTitle: null
  }} />
    </Stack.Navigator>
  );
}
export default ProdutoUsuarioNavigator;
