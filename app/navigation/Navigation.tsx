import React, {FC} from "react";
import {View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {useAuth} from "../hooks/useAuth";
import Auth from "../componets/screens/auth/Auth";
import Payments from "../componets/screens/payments/Payments";
import Home from "../componets/screens/home/Home";
import Services from "../componets/screens/services/Services";
import Support from "../componets/screens/support/Support";
import More from "../componets/screens/more/More";
import Profile from "../componets/screens/profile/Profile";

const Stack = createNativeStackNavigator();

const Navigation: FC =()=>{
    const {user} = useAuth()
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="Profile" component={Profile}/>
                        <Stack.Screen name="Payments" component={Payments}/>
                        <Stack.Screen name="Services" component={Services}/>
                        <Stack.Screen name="Support" component={Support}/>
                        <Stack.Screen name="More" component={More}/>
                    </>
                ) : (
                    <Stack.Screen name="Auth" component={Auth}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
