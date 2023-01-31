import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './screens/HomeScreen'
import { RestaurantScreen } from './screens/RestaurantScreen'
import { store } from './store';
import { Provider } from 'react-redux';
import { BasketScreen } from './screens/BasketScreen';
import { PreparingOrderScreen } from './screens/PreparingOrderScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen 
          name='Basket' 
          component={BasketScreen} 
          options={{
            presentation: 'modal',
            headerShown: false
          }}
          />
          <Stack.Screen 
          name='PreparingOrder' 
          component={PreparingOrderScreen} 
          options={{
            headerShown: false,
            presentation: 'fullScreenModal'
          }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}