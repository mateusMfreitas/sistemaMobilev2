import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
export default function Item({ item, navigation }) {
    const editarProduto = () => {
        navigation.navigate('EditarProduto', { item: item });
    };
    return (
        <TouchableOpacity onPress={editarProduto}>
            <View style={styles.productItem}>
                <Text style={styles.productName}>{item.nome}</Text>
                <Text style={styles.productDescription}>{item.descricao}</Text>
                <Text style={styles.productPrice}>R$ {item.preco},00</Text>
                <Text style={styles.productStock}>Estoque: {item.estoque}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    productItem: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        marginVertical: 8,
        borderWidth: 1, 
        borderColor: '#000',
      },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productDescription: {
        marginTop: 4,
        color: 'gray',
    },
    productPrice: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    productStock: {
        marginTop: 4,
        color: 'green',
    }
});