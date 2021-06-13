import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import { Image, TouchableOpacity } from 'react-native'
const Stack = createStackNavigator()
const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				title: 'SHOE SELECTOR',
				headerTintColor: COLORS.lightGray,
				headerTitleStyle: {
					...FONTS.navTitle,
				},
				headerLeft: ({ onPress }) => (
					<TouchableOpacity onPress={onPress} style={{ marginLeft: SIZES.padding }}>
						<Image
							source={icons.menu}
							resizeMode="contain"
							style={{
								height: 25,
								width: 25,
							}}
						/>
					</TouchableOpacity>
				),
				headerRight: ({ onPress }) => (
					<TouchableOpacity onPress={onPress} style={{ marginRight: SIZES.padding }}>
						<Image
							source={icons.search}
							resizeMode="contain"
							style={{
								height: 30,
								width: 30,
							}}
						/>
					</TouchableOpacity>
				),
			}}
		>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	)
}

export default StackNavigator
