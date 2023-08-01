import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Texto from '../../components/Text';
import Header from '../../components/Header';
import Details from './components/Details';
import Item from './components/Item';

import useTexts from '../../hooks/useTexts';

export default function Basket({ detalhes, items, produtor }) {
    const { basketTop, itemsTitle } = useTexts();

    return <>
        <FlatList
            data={items}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Header titulo={basketTop} />
                    <View style={styles.basket}>
                        <Details {...detalhes} produtor={produtor} />
                        <Texto style={styles.title}>{itemsTitle}</Texto>
                    </View>
                </>
            }}
            style={styles.list}
        />
    </>
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ffffff',
    },
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});