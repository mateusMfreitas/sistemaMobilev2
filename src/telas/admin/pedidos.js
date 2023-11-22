import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from '../../../firebaseConfig';
import PedidoAdmin from '../../componentes/PedidoAdmin';

export default function Pedidos({ navigation, route }) {    
    const [pedidos, setPedidos] = useState([]);
    const [carregando, setCarregando] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      async function getPedidos() {
        const Collection = collection(db, "pedidos");
        const Snapshot = await getDocs(Collection);
        let promises = [];
        Snapshot.forEach((doc) => {
          const data = doc.data();
          promises.push({ id: doc.id, ...data });
        });
        const resultados = await Promise.all(promises);
        setPedidos(resultados);
        setCarregando(false);
      }
      getPedidos();
    }, [])
  );
    return (
        <View>
          {carregando ? 
          <ActivityIndicator size='large' color='black'/>
          :
          <FlatList 
            data={pedidos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PedidoAdmin navigation={navigation} item={item} />}
          />
          }
        </View>
    );
}
