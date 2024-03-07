import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SplashScreen, Detail, SearchScreen, FavoritesScreen } from '../screens'
import { theme } from '~/styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const routeIcons = {
    "Home": "home-outline",
    "Search": "search-outline",
    "Favorites": "heart-outline",
}

const BottomRoute = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                return <Ionicons name={routeIcons[route.name]} size={size} color={color}/>
            },
            headerShown: false,
            tabBarActiveTintColor: theme.colors.red,
            tabBarInactiveTintColor: theme.colors.white,
            tabBarStyle: {
                backgroundColor: theme.colors.black
            }
          })}          
            >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen options={{ tabBarLabel: 'Pesquisar'}} name="Search" component={SearchScreen} />
            <Tab.Screen options={{ tabBarLabel: 'Favoritos'}} name="Favorites" component={FavoritesScreen} />
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