import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Gift,
  HambergerMenu,
  Home,
  SearchNormal,
  User,
} from 'iconsax-react-native';
import HomeNavigator from './HomeNavigator';
import {TouchableOpacity} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children}) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: '#5C3EBC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: -8,
      }}>
      <HambergerMenu size="32" color="#FFD00C" variant="Bold" />
    </TouchableOpacity>
  );
};

const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={() => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
      })}>
      <Tab.Screen
        component={HomeNavigator}
        name="Ana Sayfa"
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
          return {
            // Eğer ProductDetails içindeysek Tab Bar'ı gizle
            tabBarStyle:
              routeName === 'ProductDetails' ? {display: 'none'} : {height: 80},
            tabBarIcon: ({color}) => <Home size="32" color={color} />,
          };
        }}
      />

      <Tab.Screen
        component={HomeNavigator}
        name="Search"
        options={{
          tabBarIcon: ({color}) => <SearchNormal size="32" color={color} />,
        }}
      />

      <Tab.Screen
        component={HomeNavigator}
        name="list"
        options={{
          tabBarIcon: () => <CustomTabBarButton />,
        }}
      />

      <Tab.Screen
        component={HomeNavigator}
        name="User"
        options={{
          tabBarIcon: ({color}) => <User size="32" color={color} />,
        }}
      />

      <Tab.Screen
        component={HomeNavigator}
        name="Gift"
        options={{
          tabBarIcon: ({color}) => <Gift size="32" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
