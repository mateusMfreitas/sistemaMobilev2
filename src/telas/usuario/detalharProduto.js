import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


export default function DetalharProduto({ navigation, route  }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const { item } = route.params;
    const precoString = item.preco.toString();

    const handleAddToCart = async () => {
        
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
