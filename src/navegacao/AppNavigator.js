import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from '../telas/cadastro/cadastro';
import Adashboard from '../telas/admin/dashboard';
import Udashboard from '../telas/usuario/dashboard';
import Produtos from '../telas/admin/produtos';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Cadastro">
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Adashboard" component={Adashboard} />
      <Stack.Screen name="Produtos" component={Produtos} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
