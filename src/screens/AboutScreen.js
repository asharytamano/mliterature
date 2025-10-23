import Constants from 'expo-constants';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  const version = Constants.expoConfig?.version || '1.0.0';
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo/mliterature-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Maranao Literature</Text>
      <Text style={styles.subtitle}>Version {version}</Text>
      <Text style={styles.dev}>Developed by: Ashary Tamano</Text>
      <Text style={styles.description}>
        A curated collection of Maranao literature: proverbs (Pananaroon), speeches (Kandomana), poetry (Bayok), narratives (Oragis),
        the epic Darangen, riddles (Kapamlalag), Totholan ko Radia Indaraptra, and the classic Mori a Kapranon translation.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', padding:16 },
  logo:{ width:120, height:120, margin:10, resizeMode:'contain' },
  title:{ fontSize:22, fontWeight:'700' },
  subtitle:{ opacity:0.7, marginVertical:4 },
  dev:{ marginBottom:8, fontWeight:'600' },
  description:{ textAlign:'center', lineHeight:20, opacity:0.9 }
});
