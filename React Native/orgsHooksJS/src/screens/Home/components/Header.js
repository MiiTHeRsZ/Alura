import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import { loadingHeader } from '../../../services/loadingData';

import logo from '../../../assets/logo.png'

class Header extends React.Component {
    state = {
        header: {
            welcome: '',
            subtitle: ''
        }
    }

    updateHeader() {
        const retorno = loadingHeader();
        this.setState({ header: retorno });
    }

    componentDidMount() {
        this.updateHeader();
    }

    render() {
        <View style={styles.header}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.welcome}>{this.state.header.welcome}</Text>
            <Text style={styles.subtitle}>{this.state.header.subtitle}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    image: {
        width: 70,
        height: 28
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 46,
        fontWeight: 'bold',
        color: '#464646'
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    }
});

export default Header;