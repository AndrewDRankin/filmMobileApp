import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { navigationOptions } from 'react-navigation';


const Info = ({navigation}) => {

	const data = navigation.getParam('data');
	const showTimes = data.showtimes;
	const image = 'https://image.tmdb.org/t/p/original/'+data.tmdbImageId+'.jpg';
	return (
		
		<Fragment>
			
			{data.tmdbImageId ?
				<View style={[styles.frame, ]}>
					<Image
						source={{uri: image}}
						style={styles.picture} />
				</View>
			: null}

			{data.year ?	
				<View>
					<Text style={styles.text}>
						Release year: {data.year}
					</Text>
				</View>
			: null}
				
			{data.synopsis !== ("No Information Available" || "")?
				<ScrollView style={styles.synopsis}>
					<View>
						<Text style={styles.synopsisText}>
							{data.synopsis}
						</Text>
					</View>
				</ScrollView>
			: null}

			{data.tmdbRating !== (0 || "")?
				<View>
					<Text style={styles.text}>
						Rating: {data.tmdbRating}%
					</Text>
				</View>
			: null}

			<View>
				<Text style={styles.text}>
					On television at {showTimes[0].startsAtTime} on {showTimes[0].startsAtDate}.
				</Text>
			</View>

		</Fragment>
	);
};
Info.navigationOptions = ({navigation}) => {

	const data = navigation.getParam('data');
	return {
		title: data.name,
		headerStyle: {
			height: 50,
			backgroundColor: 'rgb(70,72,80)',
		},
		headerTintColor: 'white',
	};
};
const styles = StyleSheet.create({

	text: {
		color: 'rgb(80,80,80)',
		fontSize: 18,
		fontWeight: 'bold',
		marginHorizontal: 20,
		marginVertical: 15,
	},
	frame: {
		padding: 15,
		marginHorizontal: 60,
		marginVertical: 15,
		alignItems: 'center',
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: 'rgb(200,200,200)',
		borderRadius: 2,
	},
	synopsis: {
		padding: 2,
		marginHorizontal: 30,
		backgroundColor: 'white',
		borderRadius: 4,
	},
	synopsisText: {
		fontSize: 15,
		fontWeight: 'normal',
		margin: 15,
	},
	picture: {
		width: 200,
		height: 200,
	},
});


export default Info;