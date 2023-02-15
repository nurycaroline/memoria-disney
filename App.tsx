import { SafeAreaView, Text, View } from 'react-native';
import Colors from './src/utils/colors';
import Button from './src/components/Button';
import Label from './src/components/Label';
import MemoryCard from './src/components/MemoryCard';

export default function App() {
  return (
    <SafeAreaView style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <MemoryCard princessName="bela" selected={true} visible={true} />

      <Button backgroundColor={Colors.pink}>
        <Label text="Reinciar" color={Colors.purple} />
      </Button>

      <Button backgroundColor={Colors.purple}>
        <Label text="Novo" color={Colors.pink} />
      </Button>


    </SafeAreaView>
  );
}
