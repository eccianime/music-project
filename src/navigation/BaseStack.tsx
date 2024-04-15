import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'native-base';
import { Welcome, Onboarding, SignIn, SignUp } from '../screens/Base';
import { BaseStackProps } from '../types/navigation';

const { Navigator, Screen } = createStackNavigator<BaseStackProps>();

export default function BaseStack() {
  const { colors } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Screen name='Welcome' component={Welcome} />
      <Screen name='Onboarding' component={Onboarding} />
      <Screen name='Sign In' component={SignIn} />
      <Screen name='Sign Up' component={SignUp} />
    </Navigator>
  );
}
