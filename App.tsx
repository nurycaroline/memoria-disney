import Colors from './src/utils/colors';
import Button from './src/components/Button';
import Label from './src/components/Label';
import MemoryCard from './src/components/MemoryCard';
import Modal from './src/components/Modal';
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as S from './src/styles'

export default function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openResult, setOpenResult] = useState(false)

  return (
    <GestureHandlerRootView style={{
      flex: 1
    }}>
      <S.Header>
        <Label fontSize={50} color={Colors.red}>Memória</Label>

        <S.HeaderButtons>
          <Button backgroundColor={Colors.pink}>
            <Label color={Colors.purple}>Reinciar</Label>
          </Button>

          <Button
            backgroundColor={Colors.purple}
            onPress={() => setOpenMenu(true)}
          >
            <Label color={Colors.pink}>Novo</Label>
          </Button>
        </S.HeaderButtons>
      </S.Header>

      <MemoryCard
        princessName="bela"
        selected={true}
        visible={true}
      />

      <Button
        backgroundColor={Colors.purple}
        onPress={() => setOpenResult(true)}
      >
        <Label color={Colors.pink}>RESULTADO</Label>
      </Button>

      <S.Footer>
        <Label color={Colors.purple}>Tempo: 00:00</Label>
        <Label color={Colors.purple}>Movimentos: 20</Label>
      </S.Footer>

      <Modal
        open={openMenu}
        onClosed={() => setOpenMenu(false)}
        childrenStyle={{ height: 250 }}
        HeaderComponent={
          <Label textAlign='center' color={Colors.purple} fontSize={28}>Tamanho:</Label>
        }
      >
        <S.ModalMenuContainer>
          <Button backgroundColor={Colors.pink}>
            <Label color={Colors.purple}>3</Label>
          </Button>
          <Button backgroundColor={Colors.pink}>
            <Label color={Colors.purple}>6</Label>
          </Button>
          <Button backgroundColor={Colors.pink}>
            <Label color={Colors.purple}>9</Label>
          </Button>
        </S.ModalMenuContainer>
      </Modal>

      <Modal
        open={openResult}
        onClosed={() => setOpenResult(false)}
        childrenStyle={{ height: 200 }}
        HeaderComponent={
          <Label
            textAlign='center'
            color={Colors.purple}
            fontSize={28}
          >
            Vitória!
          </Label>
        }
      >
        <S.ModalResultContainer>
          <S.ModalResultContainerLabel
            color={Colors.purple}
            fontSize={18}
          >
            Tempo: 0:00
          </S.ModalResultContainerLabel>
          <S.ModalResultContainerLabel
            color={Colors.purple}
            fontSize={18}
          >
            Movimentos: 6
          </S.ModalResultContainerLabel>

          <Button
            backgroundColor={Colors.purple}
            onPress={() => {
              setOpenResult(false)
              setOpenMenu(true)
            }}
          >
            <Label color={Colors.pink}>Novo</Label>
          </Button>
        </S.ModalResultContainer>
      </Modal>

    </GestureHandlerRootView>
  );
}
