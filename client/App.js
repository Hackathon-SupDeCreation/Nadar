import React from 'react'
import ChatbotPage from './containers/ChatbotPage.js'

class App extends React.Component {
  render() {
    return (
      // <ImageBackground style={{flex: 1,}} source={require('./img/dust.png')}>
      <div> 
        <ChatbotPage />
      </div>
      
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,ls
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// })


export default App