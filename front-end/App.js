import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Entrar from './pages/Entrar';
import Mapa from './pages/Mapa';
import Cadastro from './pages/Cadastro'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Mapa} />
      <Stack.Screen name="Entrar" component={Entrar} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
