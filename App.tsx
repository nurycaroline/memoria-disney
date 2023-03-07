import Board from './src/screens/Board';
import { RecoilRoot } from 'recoil';
import { SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import './src/i18n'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [music, setMusic] = useState<Audio.Sound>()

  useEffect(() => {
    async function prepare() {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('./src/assets/music/All_Kinds_Of_Magic/music.mp3')
        )
        setMusic(sound);
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      await music?.playAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <RecoilRoot>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Board />
      </SafeAreaView>
    </RecoilRoot>
  );
}
