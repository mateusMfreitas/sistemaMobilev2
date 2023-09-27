import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function EditarProduto({ navigation, route  }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const { item } = route.params;
    const precoString = item.preco.toString();
    const qtdString = item.estoque.toString();

    const handleEditProduct = async () => {
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

            setNome('');
            setDescricao('');
            setPreco('');
            setQuantidade('');

            if (fecharFormulario) fecharFormulario();

        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            Alert.alert("Erro", "Erro ao adicionar produto.");
        }
    };

    return( 
    <View>
        <TextInput
                placeholder={item.nome}
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />
             <TextInput
                placeholder={item.descricao}
                value={descricao}
                onChangeText={setDescricao}
                style={styles.input}
            />
            <TextInput
                placeholder={precoString}
                value={preco}
                onChangeText={setPreco}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                placeholder={qtdString}
                value={quantidade}
                onChangeText={setQuantidade}
                style={styles.input}
                keyboardType="numeric"
            />
            <Button title="Salvar Alterações" onPress={handleEditProduct}></Button>
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