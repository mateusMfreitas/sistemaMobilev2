import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList } from 'react-native';
import { db } from '../../../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export default function DetalharPedido({ navigation, route  }) {
    const { item } = route.params;
    console.log(item.id);

    function realizarPagamento(){
        const itemRef = doc(db, "pedidos", item.id);
        updateDoc(itemRef, {
          pagamento: 'finalizado'
        });
        navigation.navigate('Pedidos');
    }

    return( 
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Pedido</Text>
            <Text style={styles.item}>Data: {new Date(item.dataAdicionado).toLocaleDateString('pt-BR')} {new Date(item.dataAdicionado).toLocaleTimeString('pt-BR')}</Text>
            <Text style={styles.item}>Pagamento: {item.pagamento}</Text>
            <Text style={styles.item}>Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.total)}</Text>
            <Text style={styles.subTitle}>Itens:</Text>
            <FlatList 
                data={item.itens}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
            />
            <Button title="Aprovar" onPress={realizarPagamento} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        fontSize: 16,
        marginBottom: 10,
    },
});