import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from '../screens/Tab';
import Tab2 from '../screens/Tab/Tab2';

const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Navigator>
      <Screen name='Tab1' component={Tab1} />
      <Screen name='Tab2' component={Tab2} />
    </Navigator>
  );
}
