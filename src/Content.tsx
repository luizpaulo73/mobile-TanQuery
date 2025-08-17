import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getUsers } from "./api/posts";
import ErrorComponent from "./components/Error/Error";
import PostStructure from "./components/PostStructure/PostStructure";

export default function Content() {
    const { data, isLoading, error, isFetching, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    if (isLoading) return <ActivityIndicator size={"large"} />;

    if (error) {
        return (
            <ErrorComponent error={error} />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>User List</Text>
                <View style={styles.headerUnderline} />
            </View>

            <FlatList
                style={styles.flatList}
                contentContainerStyle={styles.flatListContent}
                data={data}
                refreshing={isFetching}
                onRefresh={refetch}
                renderItem={({ item }) => <PostStructure item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f7fa",
    },
    headerContainer: {
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: "#ffffff",
        shadowColor: "#4a69bd",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 8,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "800",
        color: "#4a69bd",
        letterSpacing: 1.2,
        textAlign: "center",
    },
    headerUnderline: {
        width: 80,
        height: 4,
        backgroundColor: "#4a69bd",
        borderRadius: 2,
        marginTop: 8,
    },
    flatList: {
        flex: 1,
    },
    flatListContent: {
        paddingVertical: 8,
        paddingBottom: 20,
    },
});
