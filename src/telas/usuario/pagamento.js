import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { doc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../../firebaseConfig';

export default function Pagamento({ navigation, route }) {
    const { pedido } = route.params;

    const dataFormatada = pedido.dataAdicionado.trim();
    const data = new Date(dataFormatada);

    function printarPedido(){
        console.log(pedido);
    }
    async function realizarPagamento(itens){
        const itemRef = doc(db, "pedidos", pedido.id);
        updateDoc(itemRef, {
          pagamento: 'finalizado'
        });

        for (let item of itens) {
          const produtoRef = collection(db, 'produtos');
          const q = query(produtoRef, where('nome', '==', item.nome));
          const snapshot = await getDocs(q);
          if (!snapshot.empty) {
            const produtoDoc = snapshot.docs[0];
            await updateDoc(produtoDoc.ref, {
              estoque: produtoDoc.data().estoque - item.quantidade
            });
          }
        }
        navigation.navigate('MeusPedidos');
    }

 return( 
  <View style={styles.container}>      
      <Text style={styles.title}>Pagamento</Text>
      <Text style={styles.subTitle}>Total</Text>
      <Text style={styles.total}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.total)}</Text>
      <Text style={styles.subTitle}>Data do pedido</Text>
      <Text style={styles.date}>{data.toLocaleString()}</Text>
      <Text style={styles.subTitle}>Itens</Text>
      <FlatList
        data={pedido.itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.itemName}>Nome: {item.nome}</Text>
            <Text style={styles.itemPrice}>Preço: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</Text>
            <Text style={styles.itemQuantity}>Quantidade: {item.quantidade}</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Débito" onPress={printarPedido} color="#841584"/>
        <Button title="Crédito" onPress={printarPedido} color="#841584"/>
        <Button title="Finalizar Pagamento" onPress={() => realizarPagamento(pedido.itens)} color="#841584"/>
      </View>
    </View>
 );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  total: {
    fontSize: 16,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});