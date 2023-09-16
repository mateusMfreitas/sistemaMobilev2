import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import Cadastro from './src/telas/cadastro/cadastro.js' ;
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navegacao/AppNavigator.js';


export default function App() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
}
