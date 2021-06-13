import React from 'react'
import AppNavigationContainer from './src/navigation'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {
	let [fontsLoaded] = useFonts({
		'CarmenSans-Regular': require('./src/assets/fonts/CarmenSans-Regular.otf'),
		'CarmenSans-SemiBold': require('./src/assets/fonts/CarmenSans-SemiBold.otf'),
		'CarmenSans-Thin': require('./src/assets/fonts/CarmenSans-Thin.otf'),
		'CocoGothic-Bold': require('./src/assets/fonts/CocoGothic-Bold.ttf'),
		CocoGothic: require('./src/assets/fonts/CocoGothic.ttf'),
	})
	if (!fontsLoaded) {
		return <AppLoading />
	}

	return <AppNavigationContainer />
}
