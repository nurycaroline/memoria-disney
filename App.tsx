import { SafeAreaView, ScrollView, View } from 'react-native';
import Colors from './src/utils/colors';
import Button from './src/components/Button';
import Label from './src/components/Label';
import MemoryCard from './src/components/MemoryCard';
import Modal from './src/components/Modal';
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <GestureHandlerRootView style={{
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 1
    }}>
      <Label fontSize={30} color={Colors.red}>Memória</Label>

      <MemoryCard
        princessName="bela"
        selected={true}
        visible={true}
      />

      <Button backgroundColor={Colors.pink}>
        <Label color={Colors.purple}>Reinciar</Label>
      </Button>

      <Button backgroundColor={Colors.purple}>
        <Label color={Colors.pink}>Novo</Label>
      </Button>

      <Button
        backgroundColor={Colors.purple}
        onPress={() => setOpenMenu(true)}
      >
        <Label color={Colors.pink}>ABRIR MODAL</Label>
      </Button>

      <Modal open={openMenu} onClosed={() => setOpenMenu(false)} />
    </GestureHandlerRootView>
  );
}
