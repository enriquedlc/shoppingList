import { StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductInput/>
      <View>
        <Text style={styles.productList}>Cuerpo</Text>
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
    justifyContent: 'flex-start',
  },

  productList: {
    flex: 1
  }
});