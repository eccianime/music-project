import { HStack, Input, Pressable, Text, VStack, useTheme } from 'native-base';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isCheckMarked, setCheckMarked] = useState(false);
  const { colors } = useTheme();

  const handleRegister = () => {};
  const { navigate } = useNavigation();

  return (
    <VStack mt={10} mx={6} flex={1}>
      <Text fontFamily={'bold'} fontSize={'2xl'} textAlign={'center'} mb={4}>
        Crear Cuenta
      </Text>
      <Text
        color={'coolGray.500'}
        textAlign={'center'}
        fontFamily={'medium'}
        fontSize={'lg'}
        mb={5}
      >
        {'Ingresa tu información abajo o\nregístrate con tu cuenta social'}
      </Text>
      <Text fontFamily={'medium'} fontSize={'md'} mb={2}>
        Nombre
      </Text>
      <Input
        mb={5}
        borderWidth={0}
        bgColor={'coolGray.100'}
        fontSize={'md'}
        borderRadius={'xl'}
        py={3}
        fontFamily={'medium'}
        placeholder='Ex. John Doe'
        value={formData.name}
        onChangeText={(name) => setFormData({ ...formData, name })}
      />
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
      <Text fontFamily={'medium'} fontSize={'md'} mb={2}>
        Repita la Contraseña
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
          value={formData.passwordRepeat}
          onChangeText={(passwordRepeat) =>
            setFormData({ ...formData, passwordRepeat })
          }
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

      <TouchableOpacity onPress={() => setCheckMarked(!isCheckMarked)}>
        <HStack mb={5}>
          <Ionicons
            name={isCheckMarked ? 'checkbox' : 'square-outline'}
            size={24}
            color={colors.primary[500]}
          />

          <Text ml={1} fontSize={'md'} fontFamily={'medium'}>
            De acuerdo con los{' '}
            <Text underline color={'primary.500'}>
              Terminos y Condiciones
            </Text>
          </Text>
        </HStack>
      </TouchableOpacity>
      <VStack flex={1} />
      <Pressable
        _pressed={{
          bg: 'primary.600',
        }}
        bg={'primary.500'}
        borderRadius={'full'}
        h={'12'}
        justifyContent={'center'}
        alignItems={'center'}
        onPress={handleRegister}
      >
        <Text fontSize={'lg'} fontFamily={'bold'} color={'white'}>
          Crear Cuenta
        </Text>
      </Pressable>
      <TouchableOpacity onPress={() => navigate('Sign In')}>
        <Text fontSize={'md'} fontFamily={'medium'} textAlign={'center'} mt={5}>
          Ya tienes una cuenta?{' '}
          <Text fontFamily={'bold'} color={'primary.500'} underline>
            Entra aqui
          </Text>
        </Text>
      </TouchableOpacity>
    </VStack>
  );
}
