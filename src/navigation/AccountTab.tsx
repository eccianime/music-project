import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Theme, VStack, useTheme } from 'native-base';
import {
  Discover,
  Download,
  Home,
  Playlist,
  Profile,
} from '../screens/Account';
import { AccountTabProps } from '../types';
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator<AccountTabProps>();

const renderIconAndLabel = (
  routeName: string,
  isFocused: boolean,
  colors: Theme['colors']
) => {
  const ICONS = {
    Home: {
      icon: 'home',
      label: 'Inicio',
    },
    Discover: {
      icon: 'compass',
      label: 'Descubrir',
    },
    Download: {
      icon: 'cloud-download',
      label: 'Descargar',
    },
    Playlist: {
      icon: 'music-box-multiple',
      label: 'Bilioteca',
    },
    Profile: {
      icon: 'account-circle',
      label: 'Perfil',
    },
  };
  const color = isFocused ? colors.primary[500] : colors.gray[400];
  return (
    <VStack alignItems={'center'} w={'full'}>
      {isFocused && (
        <VStack
          position={'absolute'}
          top={-20}
          w={'5'}
          h={'5'}
          overflow={'hidden'}
        >
          <VStack
            bg={'primary.500'}
            w={5}
            h={5}
            position={'absolute'}
            bottom={2.5}
            borderRadius={'full'}
          />
        </VStack>
      )}
      <MaterialCommunityIcons
        name={ICONS[routeName].icon}
        size={24}
        color={color}
      />
      <Text
        fontFamily={isFocused ? 'bold' : 'medium'}
        textAlign={'center'}
        color={color}
      >
        {ICONS[routeName].label}
      </Text>
    </VStack>
  );
};

export default function AccountTab() {
  const { colors } = useTheme();
  return (
    <Navigator
      sceneContainerStyle={{ backgroundColor: colors.white }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) =>
          renderIconAndLabel(route.name, focused, colors),
        tabBarLabel: () => null,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 85,
        },
      })}
    >
      <Screen name='Home' component={Home} />
      <Screen name='Discover' component={Discover} />
      <Screen name='Download' component={Download} />
      <Screen name='Playlist' component={Playlist} />
      <Screen name='Profile' component={Profile} />
    </Navigator>
  );
}
