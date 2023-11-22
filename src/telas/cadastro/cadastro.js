import {SafeAreaView, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Text, View } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../../../firebaseConfig';
import { estilosComuns } from '../../estilo/estilosComuns';


export default function Cadastro({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const criarUsuario = async () => {
    try {
      const auth = getAuth();
      const credenciais = await createUserWithEmailAndPassword(auth, username, password);
      const colecao = db.collection('carrinhos');
      colecao.add({
        id_usuario:auth.currentUser.uid,
        itens:[],
      });
      Alert.alert('Sucesso', `Usuário ${credenciais.user.email} criado com sucesso!`);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao criar usuário: ' + error.message);

    }
  };

  return (
    
    <SafeAreaView style={styles.container}>
          <TextInput
              style={estilosComuns.input}
              onChangeText={setUsername}
              value={username}
              placeholder="E-Mail"
          />
          <TextInput
              style={estilosComuns.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Senha"
              secureTextEntry={true}
              
          />
          <TouchableOpacity style={estilosComuns.button} onPress={criarUsuario}>
            <Text style={estilosComuns.buttonText}>Criar Usuário</Text>
          </TouchableOpacity>
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
