/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import Frog file currently in root directory and figure out how to point to it in line 22

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

// Import the react-native-sound module 
var Sound = require('react-native-sound');

// Load the sound file 'whoosh.mp3' from the app bundle 
// See notes below about preloading sounds within initialization code below. 
var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
	console.log('failed to load the sound', error);
    } else { // loaded successfully 
	console.log('properly loaded the sound');
    }
});

// Play the sound with an onEnd callback 
var playSound = whoosh.play((success) => {
    if (success) {
	console.log('successfully finished playing');
    } else {
	console.log('playback failed due to audio decoding errors');
    }
});

var WrapUpPunks = React.createClass({
    getInitialState: function() {
	return { active: false }
    },

    handleButtonClick: function() {
	this.setState({ active: !this.state.active })
	onEnd: playSound
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
