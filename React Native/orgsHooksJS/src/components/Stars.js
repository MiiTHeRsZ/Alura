import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Star from "./Star";

export default function Stars({
    amount: previousAmount,
    editable = false,
    big = false
}) {
    const [amount, setAmount] = useState(previousAmount);

    const RenderStars = () => {
        const starsList = [];
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <Star
                    key={i}
                    onPress={() => setAmount(i + 1)}
                    disabled={!editable}
                    fill={i < amount}
                    big={big}
                />
            );
        }
    }

    return (
        <View style={styles.stars}>
            <RenderStars />
        </View>
    );
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row'
    }
});