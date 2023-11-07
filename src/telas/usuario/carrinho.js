import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebaseConfig';


export default function Carrinho({ navigation }) {
  const [ids, setIds] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getCarrinho();
  }, []);
  async function getProduto(id){
    const docRef = doc(db, "produtos", id);
    const docSnap = await getDoc(docRef);
    produtos.push(docSnap.data());
    return(docSnap.data());
  }
  async function getCarrinho() {
    try {
      const carrinho = await AsyncStorage.getItem("carrinho");
      const carrinhoObj = JSON.parse(carrinho);
      console.log(carrinhoObj);
      if (carrinhoObj.id !== null) {
        setIds(carrinhoObj.id.split(','));
  
        const promises = ids.map(async (id) => {
          return getProduto(id);
        });
  
        const produtos = await Promise.all(promises);
        setProdutos(produtos);
        console.log(produtos); 
      }
    } catch (error) {
      console.log('Erro ao buscar os IDs:', error);
    }
  }

  const Item = ({id}) => (
    <View>
      <Text>{id}</Text>
    </View>
  );
 return( 
  <View>
      <Button title="Inserir Produto" onPress={getCarrinho} />
      
    </View>
 );

}