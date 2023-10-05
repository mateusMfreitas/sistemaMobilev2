import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Carrinho({ navigation }) {
  const [ids, setIds] = useState([]);
  useEffect(() => {
    getCarrinho();
  }, []);
  async function getCarrinho(){
    try{
    const carrinho = await AsyncStorage.getItem("carrinho");
    const carrinhoObj = JSON.parse(carrinho);
    if (carrinhoObj.id !== null) {
      setIds(carrinhoObj.id.split(','));
    }
  }catch{
      console.log('Erro ao buscar os IDs');
    }
  }


 return( 
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={ids}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button title="Finalizar Compra"></Button>
  </View>
 );

}