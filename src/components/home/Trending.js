import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { trending } from '../../constants/trending'
import { Svg, Polygon } from 'react-native-svg'
const Trending = ({ setSelectedItem, setShowAddToBagModal }) => {
	const renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					setSelectedItem(item)
					setShowAddToBagModal(true)
				}}
				style={[styles.trendingShoe, { marginLeft: index == 0 ? SIZES.padding : 0 }]}
			>
				<Text style={styles.txtName}>{item.type}</Text>
				<View style={[styles.trendingWrapper, styles.trendingShadow, { backgroundColor: item.bgColor }]}>
					<View style={styles.txtWrapper}>
						<Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
						<Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</Text>
					</View>
				</View>
				<View style={styles.svg}>
					<Svg height="100%" width="100%">
						<Polygon points="0,0 160,0 160,80" fill="white" />
					</Svg>
				</View>
				<Image source={item.img} resizeMode="cover" style={styles.img} />
			</TouchableOpacity>
		)
	}
	return (
		<View style={styles.container}>
			<FlatList
				data={trending}
				renderItem={renderItem}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	)
}

export default Trending

const styles = StyleSheet.create({
	container: {
		height: 260,
		marginTop: SIZES.radius,
	},
	trendingShoe: {
		height: 240,
		width: 180,
		marginHorizontal: SIZES.base,
	},
	txtName: {
		color: COLORS.gray,
		...FONTS.h5,
	},
	trendingWrapper: {
		flex: 1,
		justifyContent: 'flex-end',
		marginTop: SIZES.base,
		borderRadius: 10,
		marginRight: SIZES.padding,
		paddingLeft: SIZES.radius,
		paddingRight: SIZES.radius,
		paddingBottom: SIZES.radius,
	},
	txtWrapper: {
		height: '35%',
		justifyContent: 'space-between',
	},
	img: {
		position: 'absolute',
		top: 50,
		right: 0,
		width: '98%',
		height: 80,
		transform: [
			{
				rotate: '-15deg',
			},
		],
	},
	svg: {
		position: 'absolute',
		top: 29,
		right: 0,
		width: '95%',
		height: '100%',
	},
	trendingShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		// elevation: 7,
	},
})
