import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlocNav from '../components/BlocNav.js'

class AppHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BlocNav imgUrl={require('../img/nav1.png')} text='Dialogue avec Nadar'/>
        <BlocNav imgUrl={require('../img/nav2.png')} text='Infos points'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
  },
})

export default AppHeader
