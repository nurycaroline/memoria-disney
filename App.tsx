import { SafeAreaView } from 'react-native';
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

      <Label fontSize={30} color={Colors.red}>Memória</Label>

      <MemoryCard
        princessName="bela"
        selected={true}
        visible={true}
      />

      <MemoryCard
        princessName="bela"
        selected={true}
        visible={false}
      />

      <MemoryCard
        princessName="bela"
        selected={false}
        visible={false}
      />

      <Button backgroundColor={Colors.pink}>
        <Label color={Colors.purple}>Reinciar</Label>
      </Button>

      <Button backgroundColor={Colors.purple}>
        <Label color={Colors.pink}>Novo</Label>
      </Button>
    </SafeAreaView>
  );
}
function useFonts(arg0: { PrincessSofia: any; }): [any] {
  throw new Error('Function not implemented.');
}

