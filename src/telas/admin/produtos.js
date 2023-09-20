import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import InserirProduto from '../../componentes/inserirProduto'; 
import ListarProdutos from '../../componentes/listarProdutos';
import Item from '../../componentes/item';

export default function Produtos({ navigation }) {
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
          try {
              const produtos = await ListarProdutos();
              setProducts(produtos);
          } catch (error) {
              console.error("Erro ao obter produtos: ", error);
          }
      };

      fetchProducts();
  }, []);
    const fecharFormulario = () => {
        setShowForm(false);
    };

    return (
        <View style={styles.container}>
          <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Item item={item} />}
          />
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
