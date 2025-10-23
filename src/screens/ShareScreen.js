import { Button, Share, Text, View } from 'react-native';

export default function ShareScreen() {
  async function onShare() {
    await Share.share({
      message: 'Explore Maranao Literature on the MLiterature app!',
    });
  }

  return (
    <View style={{flex:1, padding:16, gap:12}}>
      <Text style={{fontSize:18, fontWeight:'700'}}>Share</Text>
      <Text>Invite friends and family to explore Maranao literature.</Text>
      <Button title="Share the App" onPress={onShare} />
    </View>
  );
}
