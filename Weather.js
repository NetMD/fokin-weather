import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Haze : {
        iconName : "weather-hail",
        gradient : ["#4DA0B0", "#D39D38"],
        title : "Haze",
        subtitle : "Just don't go outside"
    }
};

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze"]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp : {
        fontSize : 42,
        color : "white"
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        color : "white",
        fontSize : 24,
        fontWeight : "600"
    },
    textContainer : {
        alignItems: "flex-start"
    }
});