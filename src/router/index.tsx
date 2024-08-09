import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Pages
import { HomeScreen } from '../pages/home/home'
import { SplashScreen } from '../pages/splash/splash'

//DTO
import { Store } from '../dto/store'

const Stack = createNativeStackNavigator()

const Router = () => {
  const userStore = useSelector((state: Store) => state?.userStore)

  const AuthStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  const UserStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  if (userStore?.token) {
    return <UserStack />
  } else {
    return <AuthStack />
  }
}

export default Router