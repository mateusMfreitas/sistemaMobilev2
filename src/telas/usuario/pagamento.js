import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../../firebaseConfig';


export default function Pagamento({ navigation, route }) {
    const { pedido } = route.params;

    const dataFormatada = pedido.dataAdicionado.trim();
    const data = new Date(dataFormatada);

    function printarPedido(){
        console.log(pedido);
    }
    function realizarPagamento(){
        const itemRef = doc(db, "pedidos", pedido.id);
        updateDoc(itemRef, {
          pagamento: 'finalizado'
        });
        navigation.navigate('MeusPedidos');
    }

 return( 
  <View>      
      <Text>Pagamento</Text>
      <Text>Total</Text>
      <Text>{pedido.total}</Text>
      <Text>Data do pedido</Text>
      <Text>{data.toLocaleString()}</Text>
      <Text>Itens</Text>
      <Button title="Débito" onPress={printarPedido}></Button>
      <Button title="Crédito" onPress={printarPedido}></Button>
      <Button title="Teste" onPress={realizarPagamento}></Button>

    </View>
 );

}