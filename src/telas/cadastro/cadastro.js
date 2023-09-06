import {SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Cadastro({ navigation }) {
  const [username, setUsername] = useState('');  // Nome da variável e função ajustados para clareza
  const [password, setPassword] = useState('');  // Nome da variável e função ajustados para clareza

  return (
      <SafeAreaView style={styles.container}>
          <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Usuário"
          />
          <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Senha"
              secureTextEntry={true}  // Oculta o texto da senha
          />
          <Button
            title="Login"
            onPress={() => navigation.navigate('Adashboard') }
          />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,  
    width: 200,
    padding: 10,
  },  
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
