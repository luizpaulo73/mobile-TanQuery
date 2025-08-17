import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface PostStructureProps {
    name: string;
    email: string;
    address: {
        city: string;
        street: string;
    };
}

export default function PostStructure({ item }: { item: PostStructureProps }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <View style={styles.infoSection}>
                    <View style={styles.infoRow}>
                        <Text style={styles.labelText}>Name:</Text>
                        <Text style={styles.valueText}>{item.name}</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.infoRow}>
                        <Text style={styles.labelText}>Email:</Text>
                        <Text style={styles.valueText}>{item.email}</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.infoRow}>
                        <Text style={styles.labelText}>Address:</Text>
                        <Text style={styles.valueText}>
                            {item.address.street}, {item.address.city}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#f8f9ff",
        borderRadius: 16,
        padding: 24,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: "#4a69bd",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 6,
        borderWidth: 1,
        borderColor: "#e1e8f7",
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    infoSection: {
        flex: 1,
        marginRight: 16,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    labelText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#4a69bd",
        minWidth: 90,
        marginRight: 16,
    },
    valueText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#2c3e50",
        flex: 1,
    },
    divider: {
        height: 2,
        backgroundColor: "#a8c8ec",
        marginVertical: 14,
        borderRadius: 1,
    },
});
