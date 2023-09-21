import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function EditarProduto({ navigation, item }) {
    console.log(item);
    return( 
    <View>
        <Text >{item.nome}</Text>
        <Text>{item.descricao}</Text>
        <Text>R$ {item.preco},00</Text>
        <Text>Estoque: {item.estoque}</Text>
    </View>
    );

}