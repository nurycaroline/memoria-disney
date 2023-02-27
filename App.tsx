import Board from './src/screens/Board';
import { RecoilRoot } from 'recoil';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView style={{ flex: 1 }}>
        <Board />
      </SafeAreaView>
    </RecoilRoot>
  );
}
