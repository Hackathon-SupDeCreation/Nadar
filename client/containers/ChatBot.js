import React, {Component} from 'react';
import {Text, Button, View, TouchableOpacity} from 'react-native';
import GameOfChoices from '../components/GameOfChoices.json'

class ChatBot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogueSteps: 0,
            dialogueStatus: '',
            ButtonStateHolder1: false,
            ButtonStateHolder2: false,
            ButtonStateHolder3: false,
            ButtonStateHolder4: false,
            
        };
    }

    render() {
        console.log(this.state)
        onPress1 = (previousState) => {
    
            this.setState(previousState => ({
                dialogueStatus: previousState.dialogueStatus + 'a',
                ButtonStateHolder1: true
                
            }
        
        ))
        }
        onPress2 = (previousState) => {
            this.setState(previousState => ({
                dialogueStatus: previousState.dialogueStatus + 'b',
                ButtonStateHolder2: true
                
            }))
        }
        onPress3 = (previousState) => {
            this.setState(previousState => ({
                dialogueStatus: previousState.dialogueStatus + 'c',
                ButtonStateHolder3: true
                
            }))

        }
        onPress4 = (previousState) => {
            this.setState(previousState => ({
                dialogueStatus: previousState.dialogueStatus + 'd',
                ButtonStateHolder4: true
                
            }))
        }

        return (

            <View>
                <Text>{GameOfChoices[this.state.dialogueStatus + 'r']}</Text>
                <TouchableOpacity>
                <Button
                disabled={this.state.ButtonStateHolder1}
                    onPress={onPress1}
                    title={GameOfChoices[this.state.dialogueStatus + 'a']}
                    color="#841584"/>
                    </TouchableOpacity>

                <Button
                disabled={this.state.ButtonStateHolder2}
                    onPress={onPress2}
                    title={GameOfChoices[this.state.dialogueStatus + 'b']}
                    color="#841584"
      />

                <Button
                disabled={this.state.ButtonStateHolder3}
                    onPress={onPress3}
                    title={GameOfChoices[this.state.dialogueStatus + 'c']}
                    color="#841584"/>

                <Button
                disabled={this.state.ButtonStateHolder4}
                    onPress={onPress4}
                    title={GameOfChoices[this.state.dialogueStatus + 'd']}
                    color="#841584"/>
            </View>
        )
    }
}

export default ChatBot;