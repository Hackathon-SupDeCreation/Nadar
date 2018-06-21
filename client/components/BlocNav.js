import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BlocNav = ({text}) => (
  <View>
    {text}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default BlocNav
