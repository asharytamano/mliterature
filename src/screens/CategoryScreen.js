import { useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import data from '../data/literature.json';
import { isFavorite, toggleFavorite } from '../utils/storage';

export default function CategoryScreen({ categoryId, categoryTitle }) {
  const [q, setQ] = useState('');
  const [favorites, setFavorites] = useState({});

  const entries = data.entries[categoryId] || [];

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return entries;
    return entries.filter(
      e =>
        (e.title && e.title.toLowerCase().includes(needle)) ||
        (e.text && e.text.toLowerCase().includes(needle)) ||
        (e.source && e.source.toLowerCase().includes(needle))
    );
  }, [entries, q]);

  useEffect(() => {
    // refresh favorites state on mount & when list changes
    (async () => {
      const map = {};
      for (const e of entries) {
        map[e.id] = await isFavorite(categoryId, e.id);
      }
      setFavorites(map);
    })();
  }, [categoryId, entries.length]);

  async function onToggleFav(id) {
    const map = await toggleFavorite(categoryId, id);
    setFavorites(prev => ({ ...prev, [id]: !!map[`${categoryId}:${id}`] }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{categoryTitle}</Text>

      <TextInput
        style={styles.search}
        placeholder="Search..."
        value={q}
        onChangeText={setQ}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{flex:1}}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.source ? <Text style={styles.source}>Source: {item.source}</Text> : null}
              <Text style={styles.text}>{item.text}</Text>
            </View>
            <TouchableOpacity onPress={() => onToggleFav(item.id)} style={styles.favBtn}>
              <Text style={{fontWeight:'700'}}>{favorites[item.id] ? '★' : '☆'}</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={{opacity:0.6, padding:16}}>No entries yet. Add items to <code>{categoryId}</code> in data file.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  header: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  search: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, marginBottom: 10 },
  item: { flexDirection: 'row', gap: 10, borderWidth: 1, borderColor: '#eee', padding: 12, borderRadius: 12, marginBottom: 10 },
  itemTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  source: { fontStyle: 'italic', opacity: 0.7, marginBottom: 4 },
  text: { lineHeight: 20 },
  favBtn: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 6 }
});
