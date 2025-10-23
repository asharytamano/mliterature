import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import CategoryScreen from '../screens/CategoryScreen';
import GlossaryScreen from '../screens/GlossaryScreen';
import HomeScreen from '../screens/HomeScreen';
import RatingScreen from '../screens/RatingScreen';
import ShareScreen from '../screens/ShareScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  // Common options
  const screenOptions = { headerTitleAlign: 'center' };

  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      {/* Main */}
      <Drawer.Screen name="Home" component={HomeScreen} />

      {/* Categories */}
      <Drawer.Screen
        name="Pananaroon"
        options={{ title: 'Pananaroon' }}
      >
        {() => <CategoryScreen categoryId="pananaroon" categoryTitle="Pananaroon" />}
      </Drawer.Screen>

      <Drawer.Screen name="Kandomana">
        {() => <CategoryScreen categoryId="kandomana" categoryTitle="Kandomana" />}
      </Drawer.Screen>

      <Drawer.Screen name="Bayok">
        {() => <CategoryScreen categoryId="bayok" categoryTitle="Bayok" />}
      </Drawer.Screen>

      <Drawer.Screen name="Oragis">
        {() => <CategoryScreen categoryId="oragis" categoryTitle="Oragis" />}
      </Drawer.Screen>

      <Drawer.Screen name="Darangen">
        {() => <CategoryScreen categoryId="darangen" categoryTitle="Darangen" />}
      </Drawer.Screen>

      <Drawer.Screen name="Kapamlalag">
        {() => <CategoryScreen categoryId="kapamlalag" categoryTitle="Kapamlalag" />}
      </Drawer.Screen>

      <Drawer.Screen name="Totholan ko Radia Indaraptra" options={{ title: 'Totholan ko Radia Indaraptra' }}>
        {() => <CategoryScreen categoryId="totholan" categoryTitle="Totholan ko Radia Indaraptra" />}
      </Drawer.Screen>

      <Drawer.Screen name="Mori a Kapranon">
        {() => <CategoryScreen categoryId="mori" categoryTitle="Mori a Kapranon" />}
      </Drawer.Screen>

      {/* Glossary */}
      <Drawer.Screen name="Glossary" component={GlossaryScreen} />

      {/* Drawer utilities */}
      <Drawer.Screen name="Share" component={ShareScreen} />
      <Drawer.Screen name="Rating" component={RatingScreen} />
      <Drawer.Screen name="About the App" component={AboutScreen} options={{ title: 'About' }} />
    </Drawer.Navigator>
  );
}
