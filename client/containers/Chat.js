import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native'
import GameOfChoices from '../components/GameOfChoices.json'

class Chat extends Component {
    constructor()
    {
        super()

        this.state = {
            valueArray: [],
            Playing: false,
            ButtonStateHolder1: false,
            ButtonStateHolder2: false,
            ButtonStateHolder3: false,
            ButtonStateHolder4: false
        }
        this.index = 0
    }
    state = {}

    addMore1 = () => {
        let newlyAddedValue = {
            index: this.index
        }

        this.setState({ButtonStateHolder1: true})

        this.setState({
            // disabled: true,
            valueArray: [
                ...this.state.valueArray,
                newlyAddedValue
            ]
        }, () => {
            this.index = this.index++
        })
    }

    addMore2 = () => {
        let newlyAddedValue = {
            index: this.index
        }

        this.setState({ButtonStateHolder2: true})

        this.setState({
            // disabled: true,
            valueArray: [
                ...this.state.valueArray,
                newlyAddedValue
            ]
        }, () => {
            this.index = this.index++
        })
    }

    addMore3 = () => {
        let newlyAddedValue = {
            index: this.index
        }

        this.setState({ButtonStateHolder3: true})

        this.setState({
            // disabled: true,
            valueArray: [
                ...this.state.valueArray,
                newlyAddedValue
            ]
        }, () => {
            this.index = this.index++
        })
    }

    addMore4 = () => {
        let newlyAddedValue = {
            index: this.index
        }

        this.setState({ButtonStateHolder4: true})

        this.setState({
            // disabled: true,
            valueArray: [
                ...this.state.valueArray,
                newlyAddedValue
            ]
        }, () => {
            this.index = this.index++
        })
    }

    blop = 0
    Playing = () => {
        if (blop === 1) {
            
                <View>

                    <Button
                        disabled={this.state.ButtonStateHolder1}
                        onPress={this.addMore1}
                        title={GameOfChoices['a']}
                        color="#841584"/>

                    <Button
                        disabled={this.state.ButtonStateHolder2}
                        onPress={this.addMore2}
                        title={GameOfChoices['ab']}
                        color="#841584"/>

                    <Button
                        disabled={this.state.ButtonStateHolder3}
                        onPress={this.addMore3}
                        title={GameOfChoices['abc']}
                        color="#841584"/>

                    <Button
                        disabled={this.state.ButtonStateHolder4}
                        onPress={this.addMore4}
                        title={GameOfChoices['abcd']}
                        color="#841584"/>
                </View>
            
        }
    }

    render() {
        {

            let newArray = this
                .state
                .valueArray
                .map((item, key) => {

                    if ((key) === 0) {
                        return (
                            <View key={key}>
                                <View style ={styles.containerChat}>
                                    <Text>indice</Text>
                                </View>
                                <View style ={styles.containerChat}>
                                    <Text style ={styles.textRight}>reponse</Text>
                                </View>
                            </View>
                        )

                    }

                    if ((key) === 1) {
                        return (
                            <View key={key}>
                                <View style ={styles.containerChat}>
                                    <Text>indice2</Text>
                                </View>
                                <View style ={styles.containerChat}>
                                    <Text style ={styles.textRight}>reponse2</Text>
                                </View>
                            </View>
                        )

                    }
                    if ((key) === 2) {
                        return (
                            <View key={key}>
                                <View style ={styles.containerChat}>
                                    <Text>indice3</Text>
                                </View>
                                <View style ={styles.containerChat}>
                                    <Text style ={styles.textRight}>reponse3</Text>
                                </View>
                            </View>
                        )

                    }
                    if ((key) === 3) {
                        return (
                            <View key={key}>
                                <View style ={styles.containerChat}>
                                    <Text>indice4</Text>
                                </View>
                                <View style ={styles.containerChat}>
                                    <Text style ={styles.textRight}>reponse4</Text>
                                </View>
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
                            {this.Playing}
                        </View>
                    </View>
                )
        }
    }
}
const styles = StyleSheet.create({
    textRight: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 1
    },
    containerChat: {
        flex: 1
    }
})

export default Chat