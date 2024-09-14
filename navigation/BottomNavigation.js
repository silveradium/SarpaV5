import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ScanNavigation from './ScanNavigation';
import Documents from '../screens/Library';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();



export default function Main({route}) {



  return (
        
        <Tab.Navigator initialRouteName='Home'                 
            screenOptions={({ route }) => ({
                tabBarStyle: { position: 'absolute',
                display: getTabBarVisibility(route),
                bottom: 25,
                left: 25,
                right: 25,
                height: 80,
                padding: 25,
                borderTopWidth: 1,
                borderTopColor: '#21342B',
                paddingBottom: 45,
                borderRadius: 30,
                backgroundColor: '#21342B',
                // ...styles.shadow,
                },
                headerShown: false,
                tabBarShowLabel: false,
          })} >

                    <Tab.Screen name="Home" component={Home}
                      initialParams={route.params} 
                      options={{
                      tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                          <Image
                            source={focused? require('../assets/icons/home focused.png') : require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                              height: 32,
                              tintColor: '#FFFFFF',
                              marginLeft: 10,
                            }}
                          />
                        </View>
                      ),
                    }} />
                    <Tab.Screen name="ScanNavigation" component={ScanNavigation} 
 
                    options={{ 
                      tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                          <Image
                            source={focused? require('../assets/icons/scan focused.png') : require('../assets/icons/scan.png')}
                            resizeMode="contain"
                            style={{
                              height: 37,
                              tintColor: '#FFFFFF',
                            }}
                          />
                        </View>
                      ),
                     }} />
                     <Tab.Screen name="Documents" component={Documents} 
                    initialParams={route.params} 
                    options={{ 
                      tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                          <Image
                            source={focused? require('../assets/icons/document focused.png') : require('../assets/icons/document.png')}
                            resizeMode="contain"
                            style={{
                              height: 37,
                              tintColor: '#FFFFFF',
                                marginRight: 10,
                            }}
                          />
                        </View>
                      ),
                     }} />
            </Tab.Navigator>
    
  );
}

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    if (routeName === 'Details' || routeName === 'ImageDisplay' || routeName === 'Results' || routeName === 'Medical' || routeName === 'Prevention') {
      return 'none';
    }
    return 'flex';
  };

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})