import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native'

class Chat extends Component {
    constructor()
    {
        super()

        this.state = {
            valueArray: [],
            Right: false
        }

        this.index = 0
    }
    state = {}

    addMore = () => {
        let newlyAddedValue = {
            index: this.index
        }

        this.setState({
            disabled: true,
            valueArray: [
                ...this.state.valueArray,
                newlyAddedValue
            ]
        }, () => {
            this.index = this.index++
        })
    }

    render() {
        {

            let newArray = this
                .state
                .valueArray
                .map((item, key) => {
                    if ((key % 2) == 3 % 1) {
                        return (
                            <View key={key} style ={styles.container}>
                                <Text style ={styles.text}>Row {item.index}</Text>
                            </View>
                        )
                    } else {
                        return (
                            <View key={key} style ={styles.container}>
                                <Text>Row {item.index}</Text>
                            </View>
                        )
                    }
                })
                return (

                    <View style={{
                        flex: 1
                    }}>
                        <ScrollView
                            style={{
                            backgroundColor: 'yellow'
                        }}>
                            <View>
                                {newArray
}
                            </View>
                        </ScrollView>
                        <View>
                            <Button
                                style
                                ={styles.container}
                                onPress={this.addMore}
                                title='Blop'
                                color="#841584"
                                bottom="0"
                                flex="1"/>
                        </View>
                    </View>
                )
        }
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 1
    },
    container: {
        flex: 1
    }
})

export default Chat