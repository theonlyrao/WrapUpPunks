/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Text,
    TouchableHighlight,
  View
} from 'react-native';

var WrapUpPunks = React.createClass({
    getInitialState: function() {
	return { active: false }
    },

    handleButtonClick: function() {
	this.setState({ active: !this.state.active })
    },

    render: function() {
	
	return (
	    <View style={styles.container}>
            <Text style={styles.instructions}>
	    Click the button to make a sound!
            </Text>
	    <TouchableHighlight style={styles.button} onPress={this.handleButtonClick} underlayColor='#99d9f4'>
	    <Text style={styles.buttonText}>{ this.state.active ? "YOYOYO" : "NONONONNO" }</Text>
	    </TouchableHighlight>
	    </View>
	);
    }
   
});

/* 
 * class WrapUpPunks extends Component {
 *     constructor() {
 * 	this.state = { active: false } 
 * 	}
 * 
 * 
 *     handleButtonClick() {
 * 	// updatinh the state
 * 	this.setState({ active: !this.state.active });
 *     };
 * 
 * }
 * */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    instructions: {
	alignItems: 'center',
	color: 'magenta',
    },
    button: {
	borderWidth: 1,
	borderColor: '#48BBEC',
	borderRadius: 8,
	}
});

AppRegistry.registerComponent('WrapUpPunks', () => WrapUpPunks);
