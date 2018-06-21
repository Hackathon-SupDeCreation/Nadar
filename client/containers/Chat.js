import React, {Component} from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Button
} from 'react-native';

class Chat extends Component {
    constructor()
    {
        super();

        this.state = {
            valueArray: [],
            disabled: false
        }

        this.index = 0;
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
            this.index = this.index + 1;
            this.setState({disabled: false});
        });;
    }

    render() {
        {

            let newArray = this
                .state
                .valueArray
                .map((item, key) => {
                    if ((key) == this.index) {
                        return (
                            <View>
                                <Text>Row {item.index}</Text>
                            </View>
                        );
                    } else {
                        return (
                            <View>
                                <Text>Row {item.index}</Text>
                            </View>
                        );
                    }
                });

            return (

                <View >
                    <ScrollView>
                        <View>
                            {newArray
}
                        </View>
                    </ScrollView>

                    <Button
                        disabled={this.state.ButtonStateHolder2}
                        onPress={this.addMore}
                        title='Blop'
                        color="#841584"/>
                </View>

            )
        }
    }
}

export default Chat;