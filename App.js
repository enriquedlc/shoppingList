import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.productInput}>
        <TextInput placeholder='Introduzca un producto' style={styles.productName}></TextInput>
        <Button title="añadir" style={styles.addButton}></Button>
      </View>
      <View>
        <Text>Cuerpo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    backgroundColor: "#eef4ed",
    width: "80%",
    height: 80,
    borderRadius: 5,
    padding: 10
  },

  productName: {
    flex: 4, 
  },
  
  addButton: {
    flex: 1
  }
});