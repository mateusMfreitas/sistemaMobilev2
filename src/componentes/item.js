import { Text, View, StyleSheet } from 'react-native';
export default function Item({ item }) {
    return (
        <View style={styles.productItem}>
            <Text style={styles.productName}>{item.nome}</Text>
            <Text style={styles.productDescription}>{item.descricao}</Text>
            <Text style={styles.productPrice}>R$ {item.preco},00</Text>
            <Text style={styles.productStock}>Estoque: {item.estoque}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    productItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
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