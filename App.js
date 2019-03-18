import React, { Component, Fragment } from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';
import Database from './Database';
import Info from './Info';


class Filmz extends Component {
	constructor(props) {
		super(props)
		this.clickExpand = this.clickExpand.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.keyExtractor = this.keyExtractor.bind(this);
		this.Separator = this.Separator.bind(this);
	}
	clickExpand(item) {

		this.props.navigation.navigate( 'InfoScreen', {data: item});
	}
	renderItem({item}) {

		return (
	        
	        <Fragment>

	            <View style={styles.main}>

	                <TouchableHighlight
		                    onPress={ () => this.clickExpand(item)}
		                    underlayColor={'rgb(255,230,100)'}
		                    style={styles.textBox}>
                        <View style={styles.horizontal}>
	                        <Text style={styles.label}>{item.name}</Text>
		                	<Text style={styles.label}>{item.tmdbRating}%</Text>
                        </View>
	                </TouchableHighlight>

	            </View>

	            <View>

	                <Text style={styles.labelSmall}>{item.year}</Text>

				</View>	              

            </Fragment>
        );
	}
	keyExtractor({item, index}) {

        return `${index}`;
    }
    Separator() {
        
        const style = {
            height: 6,
            backgroundColor: 'rgb(200,200,210)',
            margin: 2,
        };
        return <View style={style} />;
    }
    render() {
        
        let database = Database;
        return (
            <FlatList
                data={database}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={this.Separator} />
        );
    }
}
const flightOfThe = createStackNavigator({
  
    MainScreen: Filmz,
    InfoScreen: Info,
});

Filmz.navigationOptions = {

    title: 'Filmz!',
    headerStyle: {
        height: 100,
        backgroundColor: 'rgb(100,80,90)',
    },
    headerTintColor: 'rgb(220,220,255)',
};
const styles = StyleSheet.create({

	main: {
		backgroundColor: 'rgb(70,72,80)',
	},
	textBox: {
		flex: 1,
		height: 60,
		justifyContent: 'center',
	},
	// horizontal: {
	// 	flexDirection: 'row',				
	// },
	label: {
		paddingHorizontal: 10,
		fontSize: 17,
		fontWeight: 'bold',
		color: 'white',
	},
	labelSmall: {
		paddingHorizontal: 10,
		paddingBottom: 5,
		fontSize: 13,
		fontWeight: 'normal',
		color: 'white',
		backgroundColor: 'rgb(70,72,80)',		
	},
});


export default flightOfThe;