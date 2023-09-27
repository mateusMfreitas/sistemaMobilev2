import {SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from 'react';

export default function Login({ navigation }) {
  const auth = getAuth();
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');

  /*const handleLogin = async () => {
    try{
      const resposta = await signInWithEmailAndPassword(auth, email, password);

      if (resposta && resposta.user) {
        Alert.alert('Sucesso!', 'Logado com sucesso!');
        navigation.navigate('BottomNavigator');
    } else {
        Alert.alert('Erro', 'Não foi possível realizar o login.');
    }

    }catch{
  Alert.alert('Erro', 'Não foi possível realizar o login.');
};
  } */

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
            onPress={navigation.navigate('BottomNavigator')}
            //Por enquanto ele está enviando diretamente para a dashboard, pois estamos resolvendo problemas no login
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
