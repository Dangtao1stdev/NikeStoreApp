import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const ShoeSize = ({ selectedItem, setSelectedSize, selectedSize }) => {
	return (
		<View style={styles.container}>
			{selectedItem.sizes.map((item, index) => (
				<TouchableOpacity
					key={index}
					style={[styles.btnSize, { backgroundColor: item == selectedSize ? COLORS.white : null }]}
					onPress={() => {
						setSelectedSize(item)
					}}
				>
					<Text
						style={{
							...FONTS.body4,
							color: item == selectedSize ? COLORS.black : COLORS.white,
						}}
					>
						{item}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

export default ShoeSize

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginLeft: SIZES.radius,
		flexWrap: 'wrap',
	},
	btnSize: {
		width: 35,
		height: 25,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 5,
		marginBottom: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: COLORS.white,
	},
})
