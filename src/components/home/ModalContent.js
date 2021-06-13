import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import ShoeSize from './ShoeSize'

const ModalContent = ({ selectedItem, setSelectedItem, setSelectedSize, setShowAddToBagModal, selectedSize }) => {
	return (
		<View style={{ width: '85%', backgroundColor: selectedItem.bgColor }}>
			<Image
				source={selectedItem.img}
				resizeMode="contain"
				style={{
					width: '90%',
					height: 170,
					transform: [
						{
							rotate: '-15deg',
						},
					],
					marginTop: -SIZES.padding * 2,
				}}
			/>
			<Text style={styles.itemName}>{selectedItem.name}</Text>
			<Text style={styles.itemType}>{selectedItem.type}</Text>
			<Text style={styles.itemPrice}>{selectedItem.price}</Text>
			<View style={styles.itemSelectSize}>
				<Text style={styles.itemSize}>Select Size</Text>
				<ShoeSize selectedItem={selectedItem} setSelectedSize={setSelectedSize} selectedSize={selectedSize} />
			</View>
			<TouchableOpacity
				onPress={() => {
					setSelectedItem(null)
					setSelectedSize('')
					setShowAddToBagModal(false)
				}}
				style={styles.btn}
			>
				<Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Add to bag</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ModalContent

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemName: {
		marginTop: SIZES.padding,
		marginHorizontal: SIZES.padding,
		color: COLORS.white,
		...FONTS.body2,
	},
	itemType: {
		marginTop: SIZES.base / 2,
		marginHorizontal: SIZES.padding,
		color: COLORS.white,
		...FONTS.body3,
	},
	itemPrice: {
		marginTop: SIZES.radius,
		marginHorizontal: SIZES.padding,
		color: COLORS.white,
		...FONTS.h1,
	},
	itemSize: {
		color: COLORS.white,
		...FONTS.body3,
	},
	btn: {
		width: '100%',
		height: 70,
		marginTop: SIZES.base,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		borderTopLeftRadius: SIZES.radius,
		borderTopRightRadius: SIZES.radius,
	},
	itemSelectSize: {
		flexDirection: 'row',
		marginTop: SIZES.radius,
		marginHorizontal: SIZES.padding,
	},
})
