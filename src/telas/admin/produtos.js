import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../firebaseConfig'



export default function Produtos({ navigation }) {
  
    const [showForm, setShowForm] = useState(false);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
  
    const handleInsertProduct = () => {
       addDoc(collection(db, "produtos"), {
        nome: nome,
        descricao: descricao,
        preco: preco,
        estoque: quantidade
      });
      console.log({
        nome,
        descricao,
        preco,
        quantidade
      });
      // Limpar os campos após inserção
      setNome('');
      setDescricao('');
      setPreco('');
      setQuantidade('');
      setShowForm(false);
    };

    return (
      <View style={styles.container}>
        {!showForm ? (
          <Button title="Inserir Produto" onPress={() => setShowForm(true)} />
        ) : (
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
        )}
      </View>
    );
          
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });