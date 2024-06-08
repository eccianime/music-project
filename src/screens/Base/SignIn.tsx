import { HStack, Input, Pressable, Text, VStack, useTheme } from 'native-base';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const handleLogin = () => {
    navigate('Account', { screen: 'Home' });
  };

  return (
    <VStack mt={10} mx={6} flex={1}>
      <Text fontFamily={'bold'} fontSize={'2xl'} textAlign={'center'} mb={4}>
        Iniciar Sesión
      </Text>
      <Text
        color={'coolGray.500'}
        textAlign={'center'}
        fontFamily={'medium'}
        fontSize={'lg'}
        mb={5}
      >
        {'¡Hola, bienvenido de vuelta.\nTe hemos echado de menos!'}
      </Text>
      <Text fontFamily={'medium'} fontSize={'md'} mb={2}>
        Email
      </Text>
      <Input
        mb={5}
        borderWidth={0}
        bgColor={'coolGray.100'}
        fontSize={'md'}
        borderRadius={'xl'}
        py={3}
        placeholder='ejemplo@gmail.com'
        fontFamily={'medium'}
        value={formData.email}
        onChangeText={(email) => setFormData({ ...formData, email })}
        keyboardType='email-address'
      />
      <Text fontFamily={'medium'} fontSize={'md'} mb={2}>
        Contraseña
      </Text>
      <HStack alignItems={'center'} mb={5}>
        <Input
          w={'full'}
          borderWidth={0}
          bgColor={'coolGray.100'}
          fontSize={'md'}
          borderRadius={'xl'}
          py={3}
          placeholder='**********'
          fontFamily={'medium'}
          value={formData.password}
          onChangeText={(password) => setFormData({ ...formData, password })}
          secureTextEntry={isPasswordHidden}
        />
        <Pressable
          position={'absolute'}
          right={3}
          onPress={() => setPasswordHidden(!isPasswordHidden)}
        >
          <Ionicons
            name={isPasswordHidden ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color={colors.coolGray[500]}
          />
        </Pressable>
      </HStack>

      <TouchableOpacity onPress={() => navigate('Forgot Password')}>
        <HStack mb={5} justifyContent={'flex-end'}>
          <Text
            fontFamily={'medium'}
            underline
            color={'primary.500'}
            fontSize={'md'}
          >
            ¿Se te olvidó la Contraseña?
          </Text>
        </HStack>
      </TouchableOpacity>
      <Pressable
        _pressed={{
          bg: 'primary.600',
        }}
        bg={'primary.500'}
        borderRadius={'full'}
        h={'12'}
        justifyContent={'center'}
        alignItems={'center'}
        onPress={handleLogin}
      >
        <Text fontSize={'lg'} fontFamily={'bold'} color={'white'}>
          Ingresar
        </Text>
      </Pressable>
      <TouchableOpacity onPress={() => navigate('Sign Up')}>
        <Text fontSize={'md'} fontFamily={'medium'} textAlign={'center'} mt={5}>
          No tienes una cuenta?{' '}
          <Text fontFamily={'bold'} color={'primary.500'} underline>
            Regístrate aqui
          </Text>
        </Text>
      </TouchableOpacity>
    </VStack>
  );
}
