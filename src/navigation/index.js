import 'react-native-gesture-handler'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import React from 'react'
import StackNavigator from './StackNavigator'
const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: 'transparent',
	},
}
const AppNavigationContainer = () => {
	return (
		<NavigationContainer theme={theme}>
			<StackNavigator />
		</NavigationContainer>
	)
}

export default AppNavigationContainer
