import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import useTexts from '../../../hooks/useTexts';
import Texto from '../../../components/Text';

export default function details({ nome, produtor, descricao, preco }) {
    const { buyButton } = useTexts();

    return <>
        <Texto style={styles.name}>{nome}</Texto>
        <View style={styles.farm}>
            <Image source={produtor.imagem} style={styles.farmImage} />
            <Texto style={styles.farmName}>{produtor.nome}</Texto>
        </View>
        <Texto style={styles.description}>{descricao}</Texto>
        <Texto style={styles.price}>{preco}</Texto>

        <TouchableOpacity
            onPress={() => { }}
            style={styles.button}
        >
            <Texto style={styles.buttonText}>{buyButton}</Texto>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    farmImage: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});