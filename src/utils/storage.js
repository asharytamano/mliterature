import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = 'mliterature:favorites';

export async function getFavorites() {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : {};
}

export async function toggleFavorite(categoryId, itemId) {
  const favs = await getFavorites();
  const key = `${categoryId}:${itemId}`;
  if (favs[key]) delete favs[key]; else favs[key] = true;
  await AsyncStorage.setItem(KEY, JSON.stringify(favs));
  return favs;
}

export async function isFavorite(categoryId, itemId) {
  const favs = await getFavorites();
  return !!favs[`${categoryId}:${itemId}`];
}
