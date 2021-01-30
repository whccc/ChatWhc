import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin } from './screen/ScreenLogin';
import { ScreenRegister } from './screen/ScreenRegister';
import { ScreenChat } from './screen/ScreenChat';
import useUser from './hooks/useUser';
const Stack = createStackNavigator();

export default function App() {
  const { JsonDataUser, LoginUserAsync, LogOutUserAsync } = useUser();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {JsonDataUser === null ? (
          <>
            <Stack.Screen name="Login">
              {(props) => (
                <ScreenLogin {...props} LoginUserAsync={LoginUserAsync} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Registro" component={ScreenRegister} />
          </>
        ) : (
          <Stack.Screen name="Chat">
            {(props) => (
              <ScreenChat
                {...props}
                LogOutUserAsync={LogOutUserAsync}
                JsonDataUser={JsonDataUser}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
