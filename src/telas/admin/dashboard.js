import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import VendasPorProduto from '../../componentes/graficos/vendasPorProduto';
import VendasMesAtual from '../../componentes/graficos/vendasMesAtual';
import VendasMensais from '../../componentes/graficos/vendasMensais';

export default function ADashboard({ navigation }) {
 return( 
  <View style={styles.container}>
    <ScrollView>
      <VendasMesAtual></VendasMesAtual>
      <VendasPorProduto></VendasPorProduto>
      <VendasMensais></VendasMensais>
    </ScrollView>
  </View>
 );

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
