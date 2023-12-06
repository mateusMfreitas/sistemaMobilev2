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
            promises.push(getProduto(item.id, item.quantidade));
          }
        });
  
        const resultados = await Promise.all(promises);
        setCarrinho(resultados);
      }
      getCarrinho();
    }, [])
  );

  async function getProduto(id, quantidade){
    const documentoRef = doc(db, 'produtos', id);
    const documentoSnapshot = await getDoc(documentoRef);
    dados = documentoSnapshot.data();
    console.log(dados);
    return { ...dados, quantidade };
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
    navigation.navigate('Pagamento', { pedido: novoPedido });
    
  }

  return( 
    <View style={styles.container}>      
        <Text style={styles.title}>Itens do Carrinho:</Text>
        <FlatList
          data={carrinho}
          keyExtractor={(item) => item.nome} 
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>Nome: {item.nome}</Text>
              <Text style={styles.itemPrice}>Preço: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</Text>
              <Text style={styles.itemName}>Quantidade: {item.quantidade}</Text>

            </View>
          )}
        />
        <View style={styles.buttonContainer}>
          <Button title="Finalizar Compra" onPress={handleFinalizarCompra} color="#841584"/>
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
  itemContainer: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});