import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RecentlyViewed from '../components/home/RecentlyViewed'
import Trending from '../components/home/Trending'
import { COLORS, FONTS, SIZES } from '../constants'
import { BlurView } from 'expo-blur'
import ModalContent from '../components/home/ModalContent'
const Home = () => {
	const [showAddToBagModal, setShowAddToBagModal] = React.useState(false)
	const [selectedItem, setSelectedItem] = React.useState(null)
	const [selectedSize, setSelectedSize] = React.useState('')
	return (
		<View style={styles.container}>
			<Text style={styles.trending}>TRENDING</Text>
			{/* trending */}
			<Trending setSelectedItem={setSelectedItem} setShowAddToBagModal={setShowAddToBagModal} />
			{/* Recently Viewed */}
			<RecentlyViewed setSelectedItem={setSelectedItem} setShowAddToBagModal={setShowAddToBagModal} />
			{/* Modal */}
			<Modal animationType="slide" visible={showAddToBagModal} transparent={true}>
				<BlurView tint="light" intensity={95} style={styles.blurView}>
					{/* Button to close modal */}
					<TouchableOpacity
						onPress={() => {
							setSelectedItem(null)
							setSelectedSize('')
							setShowAddToBagModal(false)
						}}
						style={styles.absolute}
					></TouchableOpacity>
					<ModalContent
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						setSelectedSize={setSelectedSize}
						setShowAddToBagModal={setShowAddToBagModal}
						selectedSize={selectedSize}
					/>
				</BlurView>
			</Modal>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	trending: {
		marginTop: SIZES.radius,
		marginHorizontal: SIZES.padding,
		...FONTS.largeTitleBold,
	},
	blurView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	absolute: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
})
