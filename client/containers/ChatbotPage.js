import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppHeader from './AppHeader.js'
import BotPart from './BotPart.js'

class ChatbotPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <BotPart />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ChatbotPage