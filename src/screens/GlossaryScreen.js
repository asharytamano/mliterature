import { useMemo, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import data from '../data/literature.json';

export default function GlossaryScreen() {
  const [q, setQ] = useState('');
  const listRef = useRef(null);

  const items = useMemo(() => {
    const base = (data.glossary || []).slice().sort((a,b)=>a.term.localeCompare(b.term));
    const needle = q.trim().toLowerCase();
    if (!needle) return base;
    return base.filter(x =>
      x.term.toLowerCase().includes(needle) ||
      (x.definition || '').toLowerCase().includes(needle)
    );
  }, [q]);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  function jumpTo(letter) {
    const idx = items.findIndex(x => x.term.toUpperCase().startsWith(letter));
    if (idx >= 0 && listRef.current) {
      listRef.current.scrollToIndex({ index: idx, animated: true });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Glossary</Text>
      <TextInput
        style={styles.search}
        placeholder="Search term or definition…"
        value={q}
        onChangeText={setQ}
      />
      <View style={styles.az}>
        {letters.map(l => (
          <TouchableOpacity key={l} onPress={() => jumpTo(l)}>
            <Text style={styles.letter}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        ref={listRef}
        data={items}
        keyExtractor={(item, idx) => item.term + idx}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.term}>{item.term}</Text>
            <Text style={styles.def}>{item.definition}</Text>
          </View>
        )}
        onScrollToIndexFailed={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:12 },
  header: { fontSize:20, fontWeight:'700', marginBottom:8 },
  search: { borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10, marginBottom:10 },
  az: { flexDirection:'row', flexWrap:'wrap', gap:8, marginBottom:8 },
  letter: { width:16, textAlign:'center', opacity:0.7 },
  row: { paddingVertical:10, borderBottomWidth:1, borderBottomColor:'#eee' },
  term: { fontWeight:'700' },
  def: { marginTop:2 }
});
