import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebaseConfig';
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import * as FileSystem from 'expo-file-system';
import XLSX from 'xlsx';
import * as Sharing from 'expo-sharing';
import { encode as btoa } from 'base-64';

export default function VendasMensais({ navigation }) {

    async function getVendas(){
        const vendasCollection = collection(db, "pedidos");
        const pedidosSnapshot = await getDocs(vendasCollection);

        const produtoCount = {};
          var contadorMeses = [0,0,0,0,0,0,0,0,0,0,0,0];
        pedidosSnapshot.forEach(doc => {
            const data = new Date(doc.data().dataAdicionado);
            const mes = data.getUTCMonth() + 1;
            contadorMeses[mes-1]++;
        });  
          return contadorMeses;
    }
    const [data, setData] = useState({});
    useEffect(() => {
        async function fetchData() {
            const pedidosData = await getVendas();
            setData(pedidosData);
        }
        fetchData();
        }, []);
    const contadorMeses = Object.values(data);
    const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];


    async function exportToExcel() {
      const workbook = XLSX.utils.book_new();
    
      const worksheetData = [
        ['Mês', 'Vendas'],
        ...meses.map((mes, index) => [mes, contadorMeses[index]]),
      ];
      const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    
      XLSX.utils.book_append_sheet(workbook, worksheet, 'VendasMensais');
    
      const csv = XLSX.write(workbook, { type: 'binary' });
      const base64 = btoa(csv);
      const uri = FileSystem.documentDirectory + 'VendasMensais.xlsx';
      await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
    
      await Sharing.shareAsync(uri);
    }
    return (
      <View>
        <View style={styles.header}>
        <Text style={styles.title}>Vendas Por Mês</Text>
        <TouchableOpacity style={styles.button} onPress={exportToExcel}>
          <Text style={styles.buttonText}>Exportar para Excel</Text>
        </TouchableOpacity>
      </View>

        <BarChart
          data={{
            labels: meses,
            datasets: [{
              data: contadorMeses
            }]
          }}
          xLabelsAngle={-45}
          width={Dimensions.get("window").width - 16}
          height={500}
          chartConfig={{
            fromZero: true,
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            barPercentage: 0.4,
            contentInset: { top: 30, bottom: 30 } 
          }}
          verticalLabelRotation={90}
          showValuesOnTopOfBars = {true}
          fromZero={true}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
      );

}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#e26a00',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
});