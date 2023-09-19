import {SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');

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
              secureTextEntry={true}
          />
          <Button
            title="Login"
            onPress={() => navigation.navigate('BottomNavigator') }
          />
          <Button
            title="Cadastro"
            onPress={() => navigation.navigate('Cadastro')}>
          </Button>
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
