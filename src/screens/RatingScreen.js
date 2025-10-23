import { Alert, Button, Linking, Platform, Text, View } from 'react-native';

const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.maranaw.mliterature';
const IOS_URL = 'https://apps.apple.com/app/id0000000000';

export default function RatingScreen() {
  function openStore() {
    const url = Platform.OS === 'ios' ? IOS_URL : ANDROID_URL;
    Linking.openURL(url).catch(() => Alert.alert('Unable to open store link.'));
  }

  return (
    <View style={{flex:1, padding:16, gap:12}}>
      <Text style={{fontSize:18, fontWeight:'700'}}>Rate the App</Text>
      <Text>Your feedback helps us improve and preserve Maranao heritage.</Text>
      <Button title="Open Store Page" onPress={openStore} />
    </View>
  );
}
