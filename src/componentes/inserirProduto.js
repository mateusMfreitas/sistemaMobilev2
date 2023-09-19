// components/ProductInsertForm.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';

export default function InserirProduto({ onProductAdded }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleInsertProduct = async () => {
        if (!nome || !descricao || !preco || !quantidade) {
            Alert.alert("Atenção", "Por favor, preencha todos os campos!");
            return;
        }

        try {
            await addDoc(collection(db, "produtos"), {
                nome: nome,
                descricao: descricao,
                preco: parseFloat(preco),
                estoque: parseInt(quantidade, 10)
            });
            Alert.alert("Sucesso", "Produto adicionado com sucesso!");

            // Limpar os campos após inserção
            setNome('');
            setDescricao('');
            setPreco('');
            setQuantidade('');

            if (onProductAdded) onProductAdded();

        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            Alert.alert("Erro", "Erro ao adicionar produto.");
        }
    };

    return (
        <View style={styles.form}>
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />
            <TextInput
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                style={styles.input}
            />
            <TextInput
                placeholder="Preço"
                value={preco}
                onChangeText={setPreco}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Quantidade"
                value={quantidade}
                onChangeText={setQuantidade}
                style={styles.input}
                keyboardType="numeric"
            />
            <Button title="Salvar Produto" onPress={handleInsertProduct} />
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
