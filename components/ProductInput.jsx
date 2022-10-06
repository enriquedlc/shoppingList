import { StyleSheet, TextInput, View, Button } from "react-native"

 const ProductInput = () => {
    return (
        <View style={styles.productInput}>
            <TextInput placeholder='Introduzca un producto' style={styles.productName}></TextInput>
            <Button title="añadir" style={styles.addButton}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        backgroundColor: "#eef4ed",
        width: "80%",
        height: 80,
        borderRadius: 5,
        padding: 10,
        marginTop: 50
    },

    productName: {
        flex: 4,
    },

    addButton: {
        flex: 1
    }
})

export default ProductInput