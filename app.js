import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
