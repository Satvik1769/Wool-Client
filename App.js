import Signup from './pages/signUp';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './pages/login';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Sign up" component={Signup} />
   
    </Stack.Navigator>
  </NavigationContainer>
  );
}


