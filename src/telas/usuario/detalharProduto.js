import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage, ref } from "firebase/storage";
import { getDocs, collection, query,where, setDoc } from "firebase/firestore";
import { db } from '../../../firebaseConfig';
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import {estilosComuns} from '../../estilo/estilosComuns';





export default function DetalharProduto({ navigation, route  }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
    if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
    }
    };


    const storage = getStorage();
    const pathReference = ref(storage, 'eren.png');
    const { item } = route.params;
    const precoString = item.preco.toString();
    const handleAddToCart = async () => {
        const auth = getAuth();
        const user = auth.currentUser.uid;
        const Collection = collection(db, "carrinhos");
        const q = query(Collection, where('id_usuario', '==', user));
        const Snapshot = await getDocs(q);
        Snapshot.forEach(async (doc) => {
            const documentoRef = doc.ref;
            const novosItens = [...doc.data().itens, item.id]; 
          
            try {
              await setDoc(documentoRef, { itens: novosItens }, { merge: true });
              navigation.navigate('Carrinhos', { atualizarTudo: true });
              Alert.alert('Sucesso', 'Item adicionado ao carrinho');

            } catch (error) {
              console.error('Erro ao atualizar o array "itens":', error);
            }
          });         
    };

    return( 
        <View style={styles.container}>
    <Text style={styles.title}>{item.nome}</Text>
    <Text style={styles.description}>{item.descricao}</Text>
    <Text style={styles.price}>{item.preco}</Text>
    <View style={styles.quantityContainer}>
      <Button title="-" onPress={decreaseQuantity} />
      <Text>{quantity}</Text>
      <Button title="+" onPress={increaseQuantity} />
    </View>    
    <TouchableOpacity onPress={handleAddToCart} style={estilosComuns.button}>
      <Text style={estilosComuns.buttonText}>Adicionar ao Carrinho</Text>
    </TouchableOpacity>  
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
      },
      image: {
        width: '100%',
        height: 200,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
      },
      description: {
        fontSize: 16,
        margin: 10,
      },
      price: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
      },
      input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 5,
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        margin: 10,
      },
});
