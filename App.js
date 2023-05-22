import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './BottomTab/BottomNav';
import Trial from './src/OtherScreens/Trial';
import Refine from './src/Refine/Refine'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="bottom"
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Refine" component={Refine}
          options={{
            headerStyle: {
              backgroundColor: '#143D59',
            },
            headerTintColor:"#fff",
            headerTitleStyle: {
              color: "#fff"
              // fontWeight: 'bold
            },
          }} />
    


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App