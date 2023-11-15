import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage, ref } from "firebase/storage";
import { getDocs, collection, query,where, setDoc } from "firebase/firestore";
import { db } from '../../../firebaseConfig';
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';





export default function DetalharProduto({ navigation, route  }) {
    const [imageUrl, setImageUrl] = useState(null);

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
        <View>
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.preco}</Text>
            <Button title="Adicionar ao Carrinho" onPress={handleAddToCart}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    form: {
        width: '80%',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 5
    }
});
