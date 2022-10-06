import { useState } from "react"
import { StyleSheet, TextInput, View, Button } from "react-native"

 const ProductInput = () => {

    const [productName, setProductName] = useState('') // useState('') cuando creo la instancia va a haber una cadena vacía

    const changeTextHandler = (value) => {
        console.log(value)
        setProductName(value) // lo que escribo se guerda en el estado
    }

    return (
        <View style={ styles.productInput }>
            <TextInput 
            style={ styles.productName }
            placeholder='Introduzca un producto'
            keyboardType="default" // manera de mostrar el teclado
            onChangeText={ changeTextHandler } // onChangeText actualiza el texto
            value={ productName } // value es lo que hay en el textInput
            ></TextInput>
            <Button title="añadir" style={ styles.addButton }></Button>
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