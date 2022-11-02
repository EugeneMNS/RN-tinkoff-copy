import React, {FC} from "react";
import {Text} from "react-native";
import Header from "./Header";
import Layout from "../../layouts/Layout";
import Stories from "../profile/stories/Stories";

const Home : FC = () => {
    return(
        <Layout>
            <Header />
            <Stories />
        </Layout>
    )
}

export default Home
