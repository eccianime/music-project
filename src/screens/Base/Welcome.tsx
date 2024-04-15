import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

export default function Welcome() {
  const { navigate } = useNavigation();
  return (
    <VStack flex={1}>
      <VStack flex={1} />
      <VStack mx={6}>
        <Text fontFamily={'bold'} fontSize={'2xl'} textAlign={'center'} mb={3}>
          {'¡Bienvenido a tu propia\n'}
          <Text color={'primary.500'}>{'Biblioteca Musical!'}</Text>
        </Text>
        <Text color={'coolGray.500'} textAlign={'center'} fontFamily={'medium'}>
          Explora, descubre y disfruta de una amplia selección de melodías en tu
          biblioteca musical personalizada. Desde clásicos atemporales hasta los
          últimos lanzamientos, encuentra lo que necesitas para cada momento.
        </Text>
        <Pressable
          _pressed={{
            bg: 'primary.600',
          }}
          bg={'primary.500'}
          borderRadius={'full'}
          h={'12'}
          justifyContent={'center'}
          alignItems={'center'}
          my={6}
          onPress={() => navigate('Onboarding')}
        >
          <Text fontSize={'lg'} fontFamily={'bold'} color={'white'}>
            Iniciemos
          </Text>
        </Pressable>
        <TouchableOpacity onPress={() => navigate('Sign In')}>
          <Text
            fontSize={'md'}
            fontFamily={'medium'}
            textAlign={'center'}
            mb={5}
          >
            Ya tienes una cuenta?{' '}
            <Text fontFamily={'bold'} color={'primary.500'} underline>
              Entra aqui
            </Text>
          </Text>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
}
