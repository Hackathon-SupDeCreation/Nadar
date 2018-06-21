import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const PlayBtn = ({text}) => (
  <View>
    <Button onPress={() => console.log('Jouer')} title={text}></Button>
  </View>
)

const styles = StyleSheet.create({
  container: {

  },
})

export default PlayBtn
