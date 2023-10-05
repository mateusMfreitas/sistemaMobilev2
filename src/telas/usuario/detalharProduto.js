import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DetalharProduto({ navigation, route  }) {
    const { item } = route.params;
    const precoString = item.preco.toString();
    const handleAddToCart = async () => {
        const valorAntigo = await AsyncStorage.getItem("carrinho");
        const arrayAtual = valorAntigo ? JSON.parse(valorAntigo) : [];
        
        arrayAtual.id = arrayAtual.id +','+ item.id;
        await AsyncStorage.setItem("carrinho", JSON.stringify(arrayAtual));
        Alert.alert("Sucesso", "Produto adicionado ao carrinho");

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
