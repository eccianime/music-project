import {
  Urbanist_500Medium,
  Urbanist_700Bold,
  Urbanist_900Black,
  useFonts,
} from '@expo-google-fonts/urbanist';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';

import { NativeBaseProvider } from './custom_modules/NativeBase';
import theme from './src/config/theme';

import { useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import BaseStack from './src/navigation/BaseStack';
import { store } from './src/redux';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_500Medium,
    Urbanist_700Bold,
    Urbanist_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Provider store={store}>
        <NativeBaseProvider
          theme={theme}
          config={{
            dependencies: {
              'linear-gradient': LinearGradient,
            },
          }}
        >
          <NavigationContainer>
            <BaseStack />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </SafeAreaView>
  );
}
