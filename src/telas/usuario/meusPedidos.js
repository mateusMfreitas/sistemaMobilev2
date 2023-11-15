import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from '../../../firebaseConfig';
import PedidoUsuario from '../../componentes/PedidoUsuario';

export default function MeusPedidos({ navigation, route }) {    
    const [pedidos, setPedidos] = useState([]);
    const [carregando, setCarregando] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      async function getPedidos() {
        const user = getAuth().currentUser.uid;
        const Collection = collection(db, "pedidos");
        const Snapshot = await getDocs(query(Collection, where('usuario', '==', user)));
        let promises = [];
        console.log('----------------------------------------------------------');
        Snapshot.forEach((doc) => {
            promises.push(doc.data());
        });
        const resultados = await Promise.all(promises);
        console.log(resultados);
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
            renderItem={({ item }) => <PedidoUsuario navigation={navigation} item={item}/>}
          />
          }
        </View>
    );
}
