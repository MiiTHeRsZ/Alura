import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Text({ childen, style }){
    let styleT = styles.text;

    if(style?.fontWeight === 'bold') {
        styleT = styles.textBold;
    }

    return <Text style={[style, styleT]}>{ childen }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'normal',
    },
    textBold: {
        fontWeight: 'bold',
    }
});