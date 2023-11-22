import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebaseConfig';

export default function VendasMesAtual({ navigation }) {

    async function getVendas(){
        const vendasCollection = collection(db, "pedidos");
        const pedidosSnapshot = await getDocs(vendasCollection);

        var pedidosCount = 0;

        pedidosSnapshot.forEach(doc => {
            const data = new Date(doc.data().dataAdicionado);
            const mes = data.getUTCMonth() + 1;

            const dataAtual = new Date();
            const mesAtual = dataAtual.getUTCMonth() + 1;
            if(mes == mesAtual){
                pedidosCount++;
            }
        });
        
          return pedidosCount;
    }
    const [data, setData] = useState(0);
    useEffect(() => {
        async function fetchData() {
            const pedidosData = await getVendas();
            setData(pedidosData);
        }
        fetchData();
        }, []);
    return (
        <View style={styles.container}>
        <Text style={styles.textoEstilizado}>
          Vendas este mês
        </Text>
        <Text>{data}</Text>
      </View>
      );

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange', 
    padding: 10,
    borderRadius: 20, // Adicione esta linha
  },
  textoEstilizado: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
