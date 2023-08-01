import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import Producer from "./Producer";

import useProducers from "../../../hooks/useProducers";

export default function Producers({ header: Header }) {
    const [title, list] = useProducers;

    const TopList = () => {
        return <>
            <Header />
            <Text style={styles.title}>{title}</Text>
        </>
    };

    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <Producer {...item}/>}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={TopList}
        />
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
});