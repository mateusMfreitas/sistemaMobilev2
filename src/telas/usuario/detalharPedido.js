import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList } from 'react-native';

export default function DetalharPedido({ navigation, route  }) {
    const { item } = route.params;
    return( 
        <View >
            <Text >{item.dataAdicionado}</Text>
            <Text >{item.pagamento}</Text>
            <Text >{item.total}</Text>
            <FlatList 
            data={item.itens}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Text>{item.nome}</Text>}
          />
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
