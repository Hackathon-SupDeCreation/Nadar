import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const BlocNav = ({text, imgUrl}) => (
  <View style={styles.container}>
    <ImageBackground style={{flex: 1, width: '100%', height: '100%'}} resizeMode='cover' source={imgUrl}>
      <Text style={styles.text}>{text}</Text>
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  container: {
    // width: '50%',
    flex: 1,
    height: 170,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  }
})

export default BlocNav
