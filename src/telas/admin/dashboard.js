import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function ADashboard({ navigation }) {
 return( 
  <View style={styles.container}>
      <Button 
        title="Ir para Produtos" 
        onPress={() => navigation.navigate('Produtos')} 
      />
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
