import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PlanetScreen from './src/screens/PlanetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pokémon' }} />
        <Stack.Screen name="Planet" component={PlanetScreen} options={{ title: 'Detalles' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
