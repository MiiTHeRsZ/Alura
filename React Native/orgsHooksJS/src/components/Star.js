import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import star from '../assets/estrela.png';
import greyStar from '../assets/estrelaCinza.png';

export default function Star({
    onPress,
    disabled = true,
    fill,
    big = false
}) {
    const styles = stylesFunction(big);

    const getImage = () => {
        return fill ? star : greyStar;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
        >
            <Image source={getImage()} style={styles.star} />
        </TouchableOpacity>
    );
}

const stylesFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2
    }
});