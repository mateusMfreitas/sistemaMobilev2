import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
export default function Item({ item, navigation }) {
    const detalharPedido = () => {
        navigation.navigate('DetalharPedido', { item: item });
    };
    return (
        <TouchableOpacity onPress={detalharPedido}>
            <View style={styles.productItem}>
            <Text style={styles.productName}>{item.dataAdicionado}</Text>
            <Text style={styles.productName}>{item.pagamento}</Text>
            <Text style={styles.productName}>{item.total}</Text>
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