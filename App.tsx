import React from "react";
import QueryProvider from "./src/QueryProvider";
import Content from "./src/Content";

export default function App() {
    return (
        <QueryProvider>
            <Content />
        </QueryProvider>
    );
}