import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorComponent = ({ error }: { error: Error | null }) => {
    return (
        <View style={styles.container}>
            <View style={styles.errorCard}>
                <Text style={styles.errorTitle}>
                    Error ao buscar os dados
                </Text>

                <View>
                    <Text style={styles.messageText}>
                        {error?.message ||
                            "Erro desconhecido. Tente novamente mais tarde."}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
        padding: 20,
    },
    errorCard: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 24,
        width: "100%",
        maxWidth: 350,
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    errorTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#dc3545",
        textAlign: "center",
        marginBottom: 20,
    },
    messageText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#495057",
        lineHeight: 20,
        fontStyle: "italic",
    },
});

export default ErrorComponent;
