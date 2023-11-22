import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
export default function PedidoAdmin({ item, navigation, route }) {

    const getStatusColor = (status) => {
        switch (status) {
          case 'pendente':
            return 'orange';
          case 'em andamento':
            return 'blue';
          case 'concluído':
            return 'green';
          default:
            return 'black';
        }
      };
    const detalharPedido = () => {
        navigation.navigate('DetalharPedido', { item: item });
    };
    const dataFormatada = new Date(item.dataAdicionado).toLocaleString('pt-BR');
    const totalFormatado = Number(item.total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <TouchableOpacity onPress={detalharPedido}>
            <View style={styles.container}>
                <Text style={styles.title}>{dataFormatada}</Text>
                <Text style={styles.description}>{totalFormatado}</Text>
                <Text style={[styles.status, { color: getStatusColor(item.pagamento) }]}>{item.pagamento}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
      padding: 10,
      margin: 10,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#ddd',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    description: {
      fontSize: 16,
      color: 'black',

    },
    status: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });