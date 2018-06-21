import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppHeader from './AppHeader.js'
import PlayBtn from '../components/PlayBtn.js'

const ChatBot = () =>
  <View>
    <Text>Chat boteezef</Text>
  </View>

class BotPart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ChatBot />
      </View>
    )
  }
}

class ChatbotPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <BotPart />
        <PlayBtn style={styles.playButton} text='Jouer' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  playButton: {
   
  }
})

export default ChatbotPage