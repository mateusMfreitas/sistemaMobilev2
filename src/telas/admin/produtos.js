import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import InserirProduto from '../../componentes/inserirProduto'; 
import ListarProdutos from '../../componentes/listarProdutos';
import Item from '../../componentes/item';

export default function Produtos({ navigation }) {
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);
    const [atualizarProdutos, setAtualizarProdutos] = useState(false);
    const [carregando, setCarregando] = useState(true);


    useEffect(() => {
      const fetchProducts = async () => {
          try {
              const produtos = await ListarProdutos();
              setProducts(produtos);
              setCarregando(false);

          } catch (error) {
              console.error("Erro ao obter produtos: ", error);
          }
      };

      fetchProducts();
  },  [atualizarProdutos]);
    const fecharFormulario = () => {
        setShowForm(false);
        setAtualizarProdutos(prev => !prev);
    };
    return (
        <View style={styles.container}>
          {carregando ? 
          <ActivityIndicator size='large' color='black'/>
          :
          <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Item navigation={navigation} item={item}/>}
          />
          }
          {!showForm ? (
            <Button title="Inserir Produto" onPress={() => setShowForm(true)} />
          ) : (
            <InserirProduto fecharFormulario={fecharFormulario} />
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
    }
});
