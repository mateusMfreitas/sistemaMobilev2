import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage, ref } from "firebase/storage";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../../firebaseConfig';
import { getAuth } from "firebase/auth";




export default function DetalharProduto({ navigation, route  }) {
    const [imageUrl, setImageUrl] = useState(null);

    const storage = getStorage();
    const pathReference = ref(storage, 'eren.png');
    const { item } = route.params;
    const precoString = item.preco.toString();
    const handleAddToCart = async () => {
        const colecao = db.collection('carrinho');
        const auth = getAuth();
        const user = auth.currentUser.uid;

        colecao.where('id_usuario', '==', user).get()
        .then((querySnapshot) => {
            /* querySnapshot.forEach((doc) => {
            const documentoID = doc.id;
            const valorAInserir = 'NovoValor';

            colecao.doc(documentoID).update({
                meuArray: firebase.firestore.FieldValue.arrayUnion(valorAInserir)
            })
                .then(() => {
                console.log('Valor adicionado com sucesso ao array.');
                })
                .catch((error) => {
                console.error('Erro ao adicionar valor ao array:', error);
                });
            }) */;
        })
        .catch((error) => {
            console.error('Erro ao consultar a coleção:', error);
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
