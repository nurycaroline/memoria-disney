import Board from './src/screens/Board'
import { RecoilRoot } from 'recoil'
import { SafeAreaView } from 'react-native'
import React, { useCallback, useState } from 'react'
import * as ExpoSplashScreen from 'expo-splash-screen'
import Splashscreen from 'screens/Splashscreen'

ExpoSplashScreen.preventAutoHideAsync()


export default function App() {
  const [start, setStart] = useState(false)

  const onLayoutRootView = useCallback(async () => {
    await ExpoSplashScreen.hideAsync()

    setTimeout(() => {
      setStart(true)
    }, 3500)
  }, [])

  return (
    <RecoilRoot>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        {start ? <Board /> : <Splashscreen />}
      </SafeAreaView>
    </RecoilRoot>
  )
}
