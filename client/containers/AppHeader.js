import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlocNav from '../components/BlocNav.js'

class AppHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BlocNav style={styles.blocNav1} text='Dialogue avec Nadar'/>
        <BlocNav style={styles.blocNav2} text='Infos points'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  blocNav1: {
    width: '50%',
    height: '30%',
    backgroundColor: '#333',
    justifyContent: 'center',
  },
})

export default AppHeader
