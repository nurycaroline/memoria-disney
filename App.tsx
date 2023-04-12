import Board from './src/screens/Board'
import { RecoilRoot } from 'recoil'
import { SafeAreaView } from 'react-native'
import React, { useCallback, useState } from 'react'
import * as SS from 'expo-splash-screen'
import Splashscreen from 'screens/Splashscreen'

SS.preventAutoHideAsync()

import './src/i18n'

export default function App() {
  const [start, setStart] = useState(false)

  const onLayoutRootView = useCallback(async () => {
    await SS.hideAsync()

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
