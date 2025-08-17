import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsers } from "./api/posts";
import { View, Text, ActivityIndicator, FlatList, SafeAreaView } from "react-native";

export default function Content() {
    const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    if (isLoading) return <ActivityIndicator size={"large"} />;

    if (isError) {
        return (
            <View>
                <Text>Error ao buscar os dados</Text>
                <Text>Mensagem de erro:</Text> {/*{error.message} */}
            </View>
        );
    }

    return (
        <SafeAreaView>
        <Text style={{textAlign:"center", fontWeight: "bold", marginBottom: 4,}} >LISTA DE USUÁRIOS</Text>
  
        <FlatList
          data={data}
          refreshing={isFetching}
          onRefresh={refetch}
          renderItem={({ item }) => (
            <View>
              <View>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Nome:</Text> {item.name}
                </Text>
              </View>
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Email:</Text> {item.email}
              </Text>
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Cidade:</Text> {item.address.city}
              </Text>
            </View>
        )}
        />
      </SafeAreaView>
    );
}
