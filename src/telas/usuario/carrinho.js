import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../../firebaseConfig';
import { getAuth } from "firebase/auth";


export default function Carrinho({ navigation }) {
  const [ids, setIds] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getCarrinho();
  }, []);
  
  async function getCarrinho() {
    const auth = getAuth();
        const user = auth.currentUser.uid;
        const Collection = collection(db, "carrinhos");
        const q = query(Collection, where('id_usuario', '==', user));
        const Snapshot = await getDocs(q);
        Snapshot.forEach(async (doc) => {
            const itens = [...doc.data().itens];
            console.log(itens);
          }); 
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