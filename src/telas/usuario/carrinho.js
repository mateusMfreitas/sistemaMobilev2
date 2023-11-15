import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { doc, getDoc, collection, query, where, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { db } from '../../../firebaseConfig';
import { getAuth } from "firebase/auth";
import { useFocusEffect } from '@react-navigation/native';



export default function Carrinho({ navigation, route }) {

  const [carrinho, setCarrinho] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      async function getCarrinho() {
        const user = getAuth().currentUser.uid;
        const Collection = collection(db, "carrinhos");
        const Snapshot = await getDocs(query(Collection, where('id_usuario', '==', user)));
        let promises = [];
        
        Snapshot.forEach((doc) => {
          const itens = [...doc.data().itens];
  
          for (const item of itens) {
            promises.push(getProduto(item));
          }
        });
  
        const resultados = await Promise.all(promises);
        setCarrinho(resultados);
      }
      getCarrinho();
    }, [])
  );

  async function getProduto(id){
    const documentoRef = doc(db, 'produtos', id);
    const documentoSnapshot = await getDoc(documentoRef);
    dados = documentoSnapshot.data();
    return dados;
  }
  async function handleFinalizarCompra(){
    let total = 0;
     carrinho.forEach((doc) => {
      total+= parseFloat(doc.preco);
      }

    );

     const user = getAuth().currentUser.uid;
    const docRef = await addDoc(collection(db, "pedidos"), {
      usuario: user,
      total: total,
      itens: carrinho,
      pagamento: 'pendente',
      dataAdicionado: new Date().toISOString(),
  });
  const novoPedido = {
    usuario: user,
    total: total,
    itens: carrinho,
    pagamento: 'pendente',
    dataAdicionado: new Date().toISOString(),
    id: docRef.id
  };

    const q = query(collection(db, "carrinhos"), where("id_usuario", "==", user));
    const productSnapshot = await getDocs(q);
    productSnapshot.forEach((dado) =>{
      const itemRef = doc(db, "carrinhos", dado.id);
      updateDoc(itemRef, {
        itens: []
      });
    })

    Alert.alert("Sucesso", "Pedido feito!");
    console.log(novoPedido);
    navigation.navigate('Pagamento', { pedido: novoPedido });
    
  }

 return( 
  <View>      
      <Text>Itens do Carrinho:</Text>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.nome} 
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Preço: {item.preco}</Text>
          </View>
        )}
      />
      <Button title="Finalizar Compra" onPress={handleFinalizarCompra}></Button>
    </View>
 );

}