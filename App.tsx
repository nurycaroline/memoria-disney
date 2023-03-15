import Board from './src/screens/Board'
import { RecoilRoot } from 'recoil'
import { SafeAreaView } from 'react-native'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

import './src/i18n'

export default function App() {
  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  return (
    <RecoilRoot>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Board />
      </SafeAreaView>
    </RecoilRoot>
  )
}
