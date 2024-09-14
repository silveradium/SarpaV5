import Onboard from '../screens/configuration/Onboard';
import SignUp from '../screens/configuration/SignUp';
import Language from '../screens/configuration/Language';

import BottomNavigation from './BottomNavigation';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Onboard">
        <Stack.Screen name="Onboard" component={Onboard} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Language" component={Language} options={{headerShown: false}}/>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}