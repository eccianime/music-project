import { HStack, Pressable, Text, VStack, useTheme } from 'native-base';
import { useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { SCREEN_WIDTH } from '../../config/constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const scrollRef = useRef<ScrollView>(null);
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const steps = [
    {
      title: 'Explora Tu Mundo Musical',
      description:
        'Sumérgete en un universo de melodías sin límites. Descubre, crea y disfruta de tu propia banda sonora personalizada en nuestra app de música instrumental. ¡Deja que tus emociones tomen la batuta!',
      image: '',
    },
    {
      title: 'Tu Pasaporte al Sonido Sin Fronteras',
      description:
        'Viaja a través de géneros, épocas y estados de ánimo con nuestra colección diversa de música instrumental. Desde lo clásico hasta lo contemporáneo, cada nota es un nuevo destino. ¡Empieza tu viaje hoy!',
      image: '',
    },
    {
      title: 'Despierta Tu Creatividad Musical',
      description:
        'Da rienda suelta a tu inspiración y exprésate con nuestra plataforma de música instrumental. Desde la tranquilidad de una canción de piano hasta la energía de una pieza electrónica, encuentra tu voz en un mar de posibilidades. ¡Inspira y sé inspirado!',
      image: '',
    },
  ];
  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      bounces={false}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
    >
      {steps.map((step, index) => (
        <VStack w={SCREEN_WIDTH} key={`step-${index}`}>
          <VStack flex={1} />
          <VStack mx={6} mb={10}>
            <Text
              fontFamily={'bold'}
              fontSize={'2xl'}
              textAlign={'center'}
              mb={3}
            >
              {step.title}
            </Text>
            <Text
              color={'coolGray.500'}
              textAlign={'center'}
              fontFamily={'medium'}
              mb={5}
            >
              {step.description}
            </Text>
            <HStack mb={5} justifyContent={'space-between'}>
              <Pressable
                _pressed={{
                  opacity: index > 0 ? 0.5 : 0,
                }}
                onPress={() => {
                  if (index > 0) {
                    scrollRef.current.scrollTo({
                      x: (index - 1) * SCREEN_WIDTH,
                      animated: true,
                    });
                  }
                }}
                opacity={index === 0 ? 0 : 1}
                borderRadius={'full'}
                borderWidth={1}
                h={10}
                w={10}
                borderColor={'primary.500'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Ionicons
                  name='arrow-back'
                  color={colors.primary[500]}
                  size={24}
                />
              </Pressable>
              <HStack alignItems={'center'}>
                {steps.map((_, indexj) => (
                  <VStack
                    key={Math.random()}
                    h={indexj === index ? 3 : 2}
                    w={indexj === index ? 3 : 2}
                    mx={1}
                    bg={indexj === index ? 'primary.500' : 'coolGray.300'}
                    borderRadius={'full'}
                  />
                ))}
              </HStack>
              <Pressable
                _pressed={{
                  opacity: 0.5,
                }}
                onPress={() => {
                  if (index + 1 === 3) {
                    navigate('Sign Up');
                  } else {
                    scrollRef.current.scrollTo({
                      x: (index + 1) * SCREEN_WIDTH,
                      animated: true,
                    });
                  }
                }}
                borderRadius={'full'}
                borderWidth={1}
                h={10}
                w={10}
                justifyContent={'center'}
                alignItems={'center'}
                bg={'primary.500'}
              >
                <Ionicons name='arrow-forward' color={'white'} size={24} />
              </Pressable>
            </HStack>
          </VStack>
        </VStack>
      ))}
    </ScrollView>
  );
}
