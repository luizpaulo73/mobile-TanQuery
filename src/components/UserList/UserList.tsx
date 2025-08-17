import React from "react";
import { FlatList, SafeAreaView, View, StyleSheet, Text } from "react-native";
import PostStructure from "../PostStructure/PostStructure";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface UserListProps {
    data: User[];
    isFetching: boolean;
    refetch: () => void;
}

export default function UserList({ data, isFetching, refetch }: UserListProps ) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>User List</Text>
                <View style={styles.headerUnderline} />
            </View>

            <FlatList
                style={styles.flatList}
                data={data}
                refreshing={isFetching}
                onRefresh={refetch}
                renderItem={({ item }) => <PostStructure item={item} />}
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
});
