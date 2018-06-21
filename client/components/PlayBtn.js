import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const PlayBtn = ({text}) => (
  <Button onPress={() => console.log('Jouer')} title={text}></Button>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PlayBtn
