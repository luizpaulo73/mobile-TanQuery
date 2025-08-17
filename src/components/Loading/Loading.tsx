import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#4a69bd" />
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
    },
});
