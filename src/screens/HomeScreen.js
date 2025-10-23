import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import data from '../data/literature.json';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/logo/mliterature-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Maranao Literature</Text>
      <Text style={styles.subtitle}>Pananaroon • Kandomana • Bayok • Oragis • Darangen • Kapamlalag • Totholan • Mori a Kapranon</Text>

      <View style={styles.grid}>
        {data.categories.map(cat => (
          <TouchableOpacity
            key={cat.id}
            style={styles.card}
            onPress={() => navigation.navigate(cat.title || cat.id.charAt(0).toUpperCase()+cat.id.slice(1))}
          >
            <Text style={styles.cardTitle}>{cat.title}</Text>
            <Text style={styles.cardDesc}>{cat.description || cat.subtitle || ''}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.glossaryBtn} onPress={() => navigation.navigate('Glossary')}>
        <Text style={styles.glossaryText}>Open Glossary</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  logo: { width: 140, height: 140, marginVertical: 12, resizeMode: 'contain' },
  title: { fontSize: 24, fontWeight: '700', marginTop: 4 },
  subtitle: { textAlign: 'center', opacity: 0.7, marginVertical: 6 },
  grid: { width: '100%', gap: 12, marginTop: 12 },
  card: { padding: 14, borderRadius: 12, borderWidth: 1, borderColor: '#ddd' },
  cardTitle: { fontSize: 18, fontWeight: '600' },
  cardDesc: { opacity: 0.8, marginTop: 4 },
  glossaryBtn: { marginTop: 16, padding: 12, borderRadius: 10, backgroundColor: '#222' },
  glossaryText: { color: '#fff', fontWeight: '600' }
});
