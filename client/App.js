import React from 'react'
import { StyleSheet, View ,Text, ImageBackground} from 'react-native'
import ChatbotPage from './containers/ChatbotPage.js'

class App extends React.Component {
  render() {
    return (
      <ImageBackground style={{flex: 1,}} source={require('./img/dust.png')}>
      <View style={styles.container}>
        <ChatbotPage />
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})


export default App