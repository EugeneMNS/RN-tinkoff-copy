import React, {FC} from "react";
import {Text} from "react-native";
import Header from "./Header";
import Layout from "../../layouts/Layout";

const Home : FC = () => {
    return(
        <Layout>
            <Header />
            <Text>Home</Text>
        </Layout>
    )
}

export default Home
