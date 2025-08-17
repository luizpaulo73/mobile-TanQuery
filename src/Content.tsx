import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsers } from "./api/users";
import ErrorComponent from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import UserList from "./components/UserList/UserList";

export default function Content() {
    const { data, isLoading, error, isFetching, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    if (isLoading) return <Loading />;
    if (error) return <ErrorComponent error={error} />;

    return <UserList data={data} isFetching={isFetching} refetch={refetch} />;
}