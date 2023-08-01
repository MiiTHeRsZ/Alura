import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Texto from './Text';

import Gradiente from '../assets/gradiente.svg';
import topo from '../assets/topo.png';
import Voltar from '../assets/voltar.svg';

const largura = Dimensions.get('screen').width;
const altura_padrao = 270;

export default function Header({ title, image = topo, altura = altura_padrao }) {
    const styles = stylesFunction(altura);

    return <>
        <Image source={image} style={styles.top} />
        <Gradiente width={largura} height={130 / 360 * largura} style={styles.gradient} />
        <Texto style={styles.title}>{title}</Texto>
        <TouchableOpacity
            onPress={() => {}}
            style={styles.backButton}
        >
            <Voltar color="#FFF" style={styles.back} />
        </TouchableOpacity>
    </>
}

const stylesFunction = (altura) => StyleSheet.create({
    top: {
        width: "100%",
        height: altura,
    },
    gradient: {
        position: 'absolute',
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#FFF",
        fontWeight: "Bold",
        padding: 16,
    },
    backButton: {
        position: "absolute",
        padding: 17,
    },
    back: {
        width: 24,
        height: 24,
    },
});