import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SplashScreen, Detail, SearchScreen, FavoritesScreen } from '../screens'
import { theme } from '~/styles/theme';

const BottomRoute = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false, 
                tabBarActiveTintColor: theme.colors.red,
                tabBarInactiveTintColor: theme.colors.white,         
            }}
            barStyle={{
                backgroundColor: theme.colors.black,
            }}
            >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
    )
}

export const Routes = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={BottomRoute} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>    
    )
}