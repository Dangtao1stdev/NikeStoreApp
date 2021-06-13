import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { recentData } from '../../constants/recentData'

const RecentlyViewed = ({ setSelectedItem, setShowAddToBagModal }) => {
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					setSelectedItem(item)
					setShowAddToBagModal(true)
				}}
				style={styles.itemWrapper}
			>
				<Image
					source={item.img}
					resizeMode="contain"
					style={{
						height: 130,
						width: 100,
					}}
				/>

				<View style={styles.textWrapper}>
					<Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.name}</Text>
					<Text style={{ ...FONTS.h3 }}>{item.price}</Text>
				</View>
			</TouchableOpacity>
		)
	}
	return (
		<View style={[styles.container, styles.recentViewedShadow]}>
			<View style={{ width: 70, marginLeft: SIZES.base }}>
				<Image
					source={images.recentlyViewedLabel}
					resizeMode="contain"
					style={{
						height: '100%',
						width: '100%',
					}}
				/>
			</View>

			<View style={{ flex: 1, paddingBottom: SIZES.padding }}>
				<FlatList
					data={recentData}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderItem}
				/>
			</View>
		</View>
	)
}

export default RecentlyViewed

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginTop: SIZES.padding,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: COLORS.white,
	},
	recentViewedShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.43,
		shadowRadius: 9.51,

		elevation: 15,
	},
	itemWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	textWrapper: {
		marginLeft: SIZES.radius,
		justifyContent: 'center',
	},
})
