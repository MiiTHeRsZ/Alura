import React, { useMemo, useReducer } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Stars from "../../../components/Stars";

const distanceInMeters = (distancia) => {
    return `${distancia}m`;
}

export default function Producers({ nome, imagem, distancia, estrelas }) {
    const [selected, invertSelected] = useReducer((selected) => !selected, false);


    const distanceText = useMemo(() => distanceInMeters(distancia), [distancia]);

    return (
        <TouchableOpacity
            onPress={invertSelected}
            style={styles.card}
        >
            <Image
                source={imagem}
                accessibilityLabel={nome}
                style={styles.image}
            />
            <View style={styles.information}>
                <View>
                    <Text style={styles.name}>{nome}</Text>
                    <Stars
                        quatidade={estrelas}
                        editavel={selected}
                        grande={selected}
                    />
                </View>
                <Text style={styles.distance}>{distancia}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        // Android
        elevation: 4,

        // IOS (;´༎ຶД༎ຶ`)
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.6
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    information: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    }
});