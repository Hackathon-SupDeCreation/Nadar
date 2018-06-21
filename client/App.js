import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChatBot from './containers/ChatBot.js'
import Chat from './containers/Chat.js'

export default class App extends React.Component {
    render() {
        return (
            <View style ={styles.MainContainer}>
                <Chat/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  MainContainer: {flex:1,
    }

})
