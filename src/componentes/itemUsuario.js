import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
export default function Item({ item, navigation }) {
    const detalharProduto = () => {
        navigation.navigate('DetalharProduto', { item: item });
    };
    return (
        <TouchableOpacity onPress={detalharProduto}>
            <View style={styles.productItem}>
                <Text style={styles.productName}>{item.nome}</Text>
                <Text style={styles.productPrice}>R$ {item.preco},00</Text>
            </View>
        </TouchableOpacity>
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
    }
});