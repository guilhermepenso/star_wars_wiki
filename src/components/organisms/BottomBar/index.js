import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '~/components/atoms';
import { BottomBarContainer, BarItem } from './styles';
import { theme } from '~/styles/theme'

const routeIcons = {
    "Home": "home-outline",
    "Search": "search-outline",
    "Favorites": "heart-outline",
}

export const BottomBar = ({ state, descriptors, navigation }) => {
  return (
    <BottomBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BarItem
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Ionicons name={routeIcons[route.name]} size={theme.metrics.px(20)} color={isFocused ? theme.colors.red : theme.colors.white}/>
            <Text 
             fontFamily="semiBold" 
             size={10} 
             color={isFocused ? 'red' : 'white'}
            >
             {label}
           </Text>
          </BarItem>
        );
      })}
    </BottomBarContainer>
  );
}

// ...
