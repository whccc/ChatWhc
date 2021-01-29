import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin } from './screen/ScreenLogin';
import { ScreenRegister } from './screen/ScreenRegister';
import { ScreenChat } from './screen/ScreenChat';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Registro" component={ScreenRegister} />
        <Stack.Screen name="Chat" component={ScreenChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
